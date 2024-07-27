"use server";
import db from "@/db/drizzle";
import { user } from "@/db/schema";
import { authOption, getAuthSession } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
export const getUser = async () => {
  // const session = await getAuthSession();
  // console.log("--- session log --- ", session);
  const session: any = await getServerSession(authOption);
  // console.log(session.user.email);

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

    
    if (!userDetails) {
      return {
        error: "User details not found",
      };
    }
  } catch (error) {
    return {
      error: `Error in fetching user: ${error}`,
    };
  }
  return userDetails;
};
