"use server";
import { getUser } from "./user";
import db from "@/db/drizzle";
import { story, user } from "@/db/schema";
import { and, arrayContains, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
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

export const updateStory = async (storyID: string, content: any) => {
  if (!storyID) {
    return {
      error: "Please Fill all fields",
    };
  }
  const Story = await db.query.story.findFirst({
    where: eq(story?.id, storyID),
  });
  if (!Story) {
    return {
      error: "story not exists",
    };
  }
  let updatedStory;
  try {
    updatedStory = await db
      .update(story)
      .set({ content: content })
      .where(eq(story?.id, storyID))
      .returning();
    if (!updatedStory.length) {
      return {
        error: "story not updated",
      };
    }
  } catch (error) {
    return {
      error: "story not updated",
    };
  }

  revalidatePath(`/p/${storyID}`);

  return { result: updatedStory };
};

// publish Story

export const publishStory = async (storyID: string, topics: string[]) => {
  if (!storyID || !topics?.length) {
    return {
      error: "Please provide complete Information",
    };
  }
  const Story = await db.query.story.findFirst({
    where: eq(story?.id, storyID),
  });
  if (!Story) {
    return {
      error: "story not exists",
    };
  }
  let updatedStory;
  try {
    updatedStory = await db
      .update(story)
      .set({ topics, publish: true })
      .where(eq(story?.id, storyID))
      .returning();
    if (!updatedStory.length) {
      return {
        error: "story not updated",
      };
    }
  } catch (error) {
    return {
      error: "story not updated",
    };
  }

  redirect(`/published/${updatedStory?.[0].id}`);
};

export const getAllStories = async (tag: string) => {
  let stories;
  try {
    if (tag) {
      stories = await db.query.story.findMany({
        where: arrayContains(story.topics, [tag]),
        with: { auther: true },
      });
    } else {
      stories = await db.query.story.findMany({
        with: { auther: true },
      });
    }

    if (!stories?.length) {
      return { error: "Error on getting stories" };
    }
  } catch (error) {
    return { error: "Error on getting stories" };
  }
  return stories;
};

// limited stories
export const getLimitedStories = async (tag: string) => {
  let stories;
  try {
    if (tag) {
      stories = await db.query.story.findMany({
        where: arrayContains(story.topics, [tag]),
        limit: 3,
        offset: 0,
        with: { auther: true },
      });
    } else {
      stories = await db.query.story.findMany({
        limit: 3,
        offset: 0,
        with: { auther: true },
      });
    }

    if (!stories?.length) {
      return { error: "Error on getting stories" };
    }
  } catch (error) {
    return { error: "Error on getting stories" };
  }
  return stories;
};
