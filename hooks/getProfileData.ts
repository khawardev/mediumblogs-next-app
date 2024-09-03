import useSWR from "swr";
import { getStoriesByUserId } from "@/actions/story";
import { getFavStoriesByUserId } from "@/actions/favorite";

const getpublishedfetcher = async ([userId, publish]: any) => {
  return await getStoriesByUserId(userId, publish);
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
    }
  );
  const { data: draftStories } = useSWR(
    [userParams, false],
    getpublishedfetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true, 
    }
  );
  const { data: savedStories } = useSWR(userParams, getFavStoriesfetcher, {
    revalidateOnFocus: true,
    revalidateOnMount: true, 
  });

  const publishSortedStories = Array?.isArray(publishedStories)
    ? publishedStories.sort(
        (a: any, b: any) =>
          new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
      )
    : [];
  const draftSortedStories = Array?.isArray(draftStories)
    ? draftStories.sort(
        (a: any, b: any) =>
          new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
      )
    : [];
  const favSortedStories = Array?.isArray(savedStories)
    ? savedStories.sort(
        (a: any, b: any) =>
          new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
      )
    : [];

  const isLoading = !publishedStories || !draftStories || !savedStories;
  return {
    publishedStories,
    draftStories,
    savedStories,
    publishSortedStories,
    draftSortedStories,
    favSortedStories,
    isLoading,
  };
};
