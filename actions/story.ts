"use server";
import { getUser } from "./user";
import db from "@/db/drizzle";
import { story, user } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export const CreateStory = async () => {
  let newStory;
  try {
    const dbuser: any = await getUser();
    newStory = await db.insert(story).values({ userId: dbuser.id }).returning();
    if (!newStory.length) {
      return {
        error: "story not created",
      };
    }
  } catch (error) {
    return {
      error: "story not created",
    };
  }

  redirect(`/p/${newStory[0].id}`);
};

export const getStorybyId = async (id: string, pubish: boolean) => {
  if (!id) {
    return { error: "dont have story" };
  }
  let storydetails;
  try {
    storydetails = await db.query.story.findFirst({
      where: and(eq(story?.id, id), eq(story?.publish, pubish)),
    });


    if (!storydetails) {
      return { error: "story not found" };
    }
  } catch (error) {
    return { error: "story not found" };
  }
  return storydetails;
};

