"use server";
import { and, eq } from "drizzle-orm";
import { getUser, getUserbyID } from "./user";
import db from "@/db/drizzle";
import { save, story } from "@/db/schema";
import { getStorybyId } from "./story";
import { revalidatePath } from "next/cache";

export const checkFav = async (storyId: string) => {
  const UserDetails: any = await getUser();
  try {
    const fav = await db.query.save.findFirst({
      where: and(eq(save?.userId, UserDetails?.id), eq(save?.storyId, storyId)),
    });
    return !!fav;
  } catch (error) {
    return { status: false };
  }
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
  revalidatePath(`/profile/${UserDetails?.id}`);
  revalidatePath(`/published/${storyId}`);
};

export const getFavStoriesByUserId = async (userId: string) => {
  if (!userId) {
    return { error: "User ID is required" };
  }

  try {
    // Fetch all favorite entries for the given user
    const favEntries = await db.query.save.findMany({
      where: eq(save.userId, userId),
      with: { story: true },
    });

    if (!favEntries.length) {
      return { error: "No favorite stories found for this user" };
    }

    const updatedFavEntries = await Promise.all(
      favEntries.map(async (fav) => {
        const Auther = await db.query.story.findFirst({
          where: eq(story?.userId, fav.story.userId),
          with: { auther: true },
        });
        return {
          ...fav,
          story: {
            ...fav.story,
            auther: Auther?.auther || null,
          },
        };
      })
    );

    return updatedFavEntries;
  } catch (error) {
    console.error("Error retrieving favorite stories:", error);
    return { error: "Error retrieving favorite stories" };
  }
};
