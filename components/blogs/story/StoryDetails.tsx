'use client'
import { checkFav } from "@/actions/favorite";
import StoryInDetails from "./StoryInDetails";
import useSWR from "swr";
import StoryDetailSkeleton from "@/components/skeletons/StoryDetailSkeleton";
import PublishedStoryInDetails from "./PublishedStoryInDetails";
import PublishedDetailSkeleton from "@/components/skeletons/PublishedDetailSkeleton";

const fetcher = async (storyId: string) => checkFav(storyId);
const StoryDetails = ({ story, moreFromCreator, profilepublishedEditDelete, profileDraftLink }: any) => {

    const { data: favStatus } = useSWR(story?.id, fetcher, {
        revalidateOnMount: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: false,
        dedupingInterval: Number.MAX_SAFE_INTEGER,
    });

    if (favStatus === undefined) return <div> {moreFromCreator ? <PublishedDetailSkeleton /> : <StoryDetailSkeleton />} </div>;
    return (
        moreFromCreator ? <PublishedStoryInDetails story={story} favStatus={favStatus} />
            : <StoryInDetails profileDraftLink={profileDraftLink} profilepublishedEditDelete={profilepublishedEditDelete} story={story} favStatus={favStatus} />
    );

}

export default StoryDetails