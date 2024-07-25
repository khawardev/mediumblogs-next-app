"use server";
import { getAuthSession } from "@/lib/auth";
import { getUser } from "./user";
export const CreateStory = async () => {
  
  let newStory;
    try {
         newStory  = await getUser();
        console.log("users email are", newStory);
        
  } catch (error) {}
};