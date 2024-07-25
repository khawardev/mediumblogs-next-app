"use server";
import { getAuthSession } from "@/lib/auth";
import { getUser } from "./user";
export const CreateStory = async () => {
  
  let newStory;
    try {
        const user: any = await getUser();
        console.log('users email are' , user);
        
  } catch (error) {}
};