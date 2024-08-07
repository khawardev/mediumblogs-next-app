import useSWR from "swr";
import { getAllStories, getLimitedStories } from "@/actions/story";
import { getAllTopics, SelectedTopics } from "@/actions/topics";

// Fetcher function to handle different types of data requests
const fetcher = (url: string, tag: string) => {
  if (url.includes("getAllStories")) return getAllStories(tag);
  if (url.includes("getLimitedStories")) return getLimitedStories(tag);
  if (url.includes("getAllTopics")) return getAllTopics();
  if (url.includes("SelectedTopics")) return SelectedTopics();
};

export const useSwrStories = ({ tag }: any) => {
  const { data: limitedStories } = useSWR(["getLimitedStories", tag], fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: Number.MAX_SAFE_INTEGER, // Cache indefinitely
  });

  const { data: allTopics } = useSWR("getAllTopics", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: Number.MAX_SAFE_INTEGER, // Cache indefinitely
  });

  const { data: getSelectedTopics } = useSWR("SelectedTopics", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: Number.MAX_SAFE_INTEGER, // Cache indefinitely
  });

  const { data: stories } = useSWR(["getAllStories", tag], fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: Number.MAX_SAFE_INTEGER, // Cache indefinitely
  });

  return { limitedStories, allTopics, getSelectedTopics, stories };
};
