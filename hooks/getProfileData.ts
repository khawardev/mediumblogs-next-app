"use client";
import useSWR from "swr";
import { getStoriesByUserId } from "@/actions/story";
import { getFavStoriesByUserId } from "@/actions/favorite";

const getpublishedfetcher = async ([userId, publish]: any) => {
  if (publish === false) {
    return await getStoriesByUserId(userId, false);
  } else {
    return await getStoriesByUserId(userId, true);
  }
};
const getFavStoriesfetcher = async (userId: any) => {
  return await getFavStoriesByUserId(userId);
};

export const useProfileData = ({ userParams }: any) => {
  const { data: publishedStories } = useSWR(
    [userParams, true],
    getpublishedfetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      dedupingInterval: Number.MAX_SAFE_INTEGER,
    }
  );
  const { data: draftStories } = useSWR(
    [userParams, false],
    getpublishedfetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      dedupingInterval: Number.MAX_SAFE_INTEGER,
    }
  );
  const { data: savedStories } = useSWR(userParams, getFavStoriesfetcher, {
    revalidateOnFocus: true,
    revalidateOnMount: true,
    dedupingInterval: Number.MAX_SAFE_INTEGER,
  });
  return { publishedStories, draftStories, savedStories };
};
