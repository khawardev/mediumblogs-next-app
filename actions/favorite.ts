"use server";

import { and, eq } from "drizzle-orm";
import { getUser } from "./user";
import db from "@/db/drizzle";
import { save } from "@/db/schema";

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
