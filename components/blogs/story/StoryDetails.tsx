'use client'
import { checkFav } from "@/actions/favorite";
import StoryInDetails from "./StoryInDetails";
import useSWR from "swr";
import StoryDetailSkeleton from "@/components/skeletons/StoryDetailSkeleton";
// import { useEffect, useState } from "react";

const fetcher = async (storyId: string) => checkFav(storyId);

const StoryDetails = ({ story }: any) => {
    // const [favStatus, setfavStatus] = useState<any>();
    // useEffect(() => {
    //     const fetch = async () => {
    //         setfavStatus(await checkFav(story?.id));
    //     }
    //     fetch();
    // }, [story?.id]);

    // const favStatus = await checkFav(story?.id);
    // const { data: favStatus, error } = useSWR([story?.id], fetcher);
    const { data: favStatus, error } = useSWR(story?.id, fetcher, {
        revalidateOnFocus: true,
        revalidateOnReconnect: false,
        dedupingInterval: Number.MAX_SAFE_INTEGER,
    });

    if (favStatus === undefined) return <div><StoryDetailSkeleton /></div>;


    return (
        <StoryInDetails story={story} favStatus={favStatus} />
    )
}

export default StoryDetails