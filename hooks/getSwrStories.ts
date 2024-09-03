import useSWR from "swr";
import { getAllStories, getLimitedStories } from "@/actions/story";
import { getAllTopics, SelectedTopics } from "@/actions/topics";

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
  });

  const { data: allTopics } = useSWR("getAllTopics", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const { data: getSelectedTopics } = useSWR("SelectedTopics", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const { data: stories } = useSWR(["getAllStories", tag], fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { limitedStories, allTopics, getSelectedTopics, stories };
};
