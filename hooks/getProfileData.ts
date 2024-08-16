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
  const { data: publishedStories, error: publishedError } = useSWR(
    [userParams, true],
    getpublishedfetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      dedupingInterval: Number.MAX_SAFE_INTEGER,
    }
  );
  const { data: draftStories, error: draftError } = useSWR(
    [userParams, false],
    getpublishedfetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      dedupingInterval: Number.MAX_SAFE_INTEGER,
    }
  );
  const { data: savedStories, error: savedError } = useSWR(
    userParams,
    getFavStoriesfetcher,
    {
      revalidateOnFocus: true,
      revalidateOnMount: true,
      dedupingInterval: Number.MAX_SAFE_INTEGER,
    }
  );

  const isLoading =
    (!publishedStories && !publishedError) ||
    (!draftStories && !draftError) ||
    (!savedStories && !savedError);

  return { publishedStories, draftStories, savedStories, isLoading };
};
