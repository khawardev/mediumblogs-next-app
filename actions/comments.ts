"use server";

import db from "@/db/drizzle";
import { comment } from "@/db/schema";
import { count, eq } from "drizzle-orm";
import { getUser } from "./user";
import { getStorybyId } from "./story";
import { revalidatePath } from "next/cache";

export const NumberofComments = async (storyId: string) => {
  try {
    const response = await db
      .select({ count: count() })
      .from(comment)
      .where(eq(comment.storyId, storyId));

    return response?.[0].count ?? 0;
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const addStoryComment = async (
  storyId: string,
  content: string,
  commentId?: string
) => {
  const user: any = await getUser();
  if (!storyId || !content) {
    return { error: "Something is missing" };
  }
  let comments;
  try {
    await getStorybyId(storyId, true);
    if (!commentId) {
      const data: any = {
        userId: user.id,
        storyId,
        content,
      };
      comments = await db.insert(comment).values(data).returning();
      console.log(comments, "comments ---");
    } else {
      const data: any = {
        userId: user.id,
        commentId,
        content,
      };
      comments = await db.insert(comment).values(data).returning();
    }
  } catch (error) {
    return { error: "Something went wrong" };
  }
  revalidatePath(`/published/${storyId}`);
};

export const getAllComments = async (storyId: string) => {
  if (!storyId) {
    return { error: "Something is missing" };
  }
  let comments;
  try {
    comments = await db.query.comment.findMany({
      where: eq(comment.storyId, storyId),
      with: {
        clap: true,
        auther: true,
        reply: { with: { clap: true } },
      },
    });
    if (!comments.length) {
      return { error: "No Comment Found" };
    }
  } catch (error) {
    return { error: "Error Getting Comment By Story" };
  }
  revalidatePath(`/published/${storyId}`);
  return comments;
};
