"use server";

import db from "@/db/drizzle";
import { comment } from "@/db/schema";
import { count, eq } from "drizzle-orm";

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
