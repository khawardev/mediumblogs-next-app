'use client'
import { checkFav } from "@/actions/favorite";
import StoryInDetails from "./StoryInDetails";
import { useEffect, useState } from "react";
const StoryDetails = ({ story }: any) => {
    const [favStatus, setfavStatus] = useState<any>();
    useEffect(() => {
        const fetch = async () => {
            setfavStatus(await checkFav(story?.id));
        }
        fetch();
    }, [story?.id]);
    return (
        <StoryInDetails story={story} favStatus={favStatus} />
    )
}

export default StoryDetails