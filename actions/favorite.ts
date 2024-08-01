"use server";

import { and, eq } from "drizzle-orm";
import { getUser } from "./user";
import db from "@/db/drizzle";
import { save } from "@/db/schema";
import { getStorybyId } from "./story";
import { revalidatePath } from "next/cache";

export const checkFav = async (storyId: string) => {
  const UserDetails: any = await getUser();
  let fav;
  try {
    fav = await db.query.save.findFirst({
      where: and(eq(save?.userId, UserDetails?.id), eq(save?.storyId, storyId)),
    });
  } catch (error) {
    return { status: false };
  }

  return !!fav;
};

export const addToFav = async (storyId: string) => {
  const UserDetails: any = await getUser();
  let fav;
  try {
    await getStorybyId(storyId, true);
    fav = await db.query.save.findFirst({
      where: and(eq(save?.userId, UserDetails?.id), eq(save?.storyId, storyId)),
    });
    if (fav) {
      await db.delete(save).where(eq(save?.id, fav.id));
    } else {
      fav = await db
        .insert(save)
        .values({
          userId: UserDetails?.id,
          storyId,
        })
        .returning();
    }
  } catch (error) {
    return { error: "Not added in Favorite" };
  }
  revalidatePath(`/published/${storyId}`);
};
