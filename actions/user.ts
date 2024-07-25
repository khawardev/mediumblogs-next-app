"use server";
import db from "@/db/drizzle";
import { user } from "@/db/schema";
import { getAuthSession } from "@/lib/auth";
import { eq } from "drizzle-orm";

export const getUser = async () => {
  const session = await getAuthSession();

  if (!session) {
    return {
      error: "Session not found",
    };
  }

  let userDetails;
  try {
    userDetails = await db.query.user.findFirst({
      where: eq(user?.email, session?.user.email),
    });

    console.log("User details:", userDetails);  // Log user details for debugging

    if (!userDetails) {
      return {
        error: "User details not found",
      };
    }
  } catch (error) {
    console.error("Error in fetching user:", error);  // Log error for debugging
    return {
      error: "Error in fetching user",
    };
  }

  return userDetails;
};
