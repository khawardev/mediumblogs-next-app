"use server";
import { getUser, getUserbyID } from "./user";
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

  redirect(`/p/${newStory[0].id}/${false}`);
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
        where: eq(story.publish, true),
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
export const getStorybyId = async (id: string, publish?: boolean) => {
  if (!id) {
    return { error: "dont have story" };
  }
  let storydetails;
  try {
    if (publish) {
      storydetails = await db.query.story.findFirst({
        where: and(eq(story?.id, id), eq(story?.publish, publish)),
        with: { auther: true },
      });
    } else {
      storydetails = await db.query.story.findFirst({
        where: eq(story?.id, id),
        with: { auther: true },
      });
    }

    if (!storydetails) {
      return { error: "story not found" };
    }
  } catch (error) {
    return { error: "story not found" };
  }
  return storydetails;
};

export const updateStory = async (
  storyID: string,
  content: any,
  publishStatus: boolean,
  patname: any
) => {
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

  revalidatePath(patname);
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

// limited stories
export const getLimitedStories = async (tag: string) => {
  let stories;
  try {
    if (tag) {
      stories = await db.query.story.findMany({
        where: and(eq(story.publish, true), arrayContains(story.topics, [tag])),
        limit: 3,
        offset: 0,
        with: { auther: true },
      });
    } else {
      stories = await db.query.story.findMany({
        where: eq(story.publish, true),
        limit: 3,
        offset: 0, // Start from the last story
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
export const getStoriesByUserId = async (userId: string, publish: boolean) => {
  if (!userId) {
    return { error: "User ID is required" };
  }

  const userDetails: any = await getUserbyID(userId);

  if (!userDetails) {
    return { error: "User not found" };
  }

  let stories;
  try {
    stories = await db.query.story.findMany({
      where: and(eq(story?.userId, userId), eq(story?.publish, publish)),
    });

    if (!stories?.length) {
      return { error: "No published stories found for this user" };
    }
    stories = stories.map((story) => ({
      ...story,
      auther: userDetails,
    }));
  } catch (error) {
    return { error: "Error fetching stories" };
  }

  return stories;
};

export const deleteStoryById = async (storyID: string, pathName: string) => {
  if (!storyID) {
    return {
      error: "Story ID is required",
    };
  }
  try {
    const Story = await db.query.story.findFirst({
      where: eq(story?.id, storyID),
    });

    if (!Story) {
      return {
        error: "Story not found",
      };
    }

    const deletedStory = await db.delete(story).where(eq(story?.id, storyID));

    revalidatePath(pathName);
    return deletedStory.command;
  } catch (error) {
    return {
      error: "Error deleting story",
    };
  }
};
export const searchStoriesByContent = async (searchText: string) => {
  if (!searchText) {
    return { error: "Search text is required" };
  }
  try {
    const stories = await db.query.story.findMany({
      where: and(eq(story.publish, true)),
      with: { auther: true },
    });
    const filteredStories = stories.filter((story: any) =>
      story.content.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredStories.length === 0) {
      return { error: "No stories match the search text" };
    }

    return filteredStories; // Return the filtered stories
  } catch (error) {
    return { error: "Error searching stories" };
  }
};
