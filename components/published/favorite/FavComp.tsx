'use client'
import { addToFav } from "@/actions/favorite";
import { getUser } from "@/actions/user";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { mutate } from "swr";

const FavComp = ({ storyId, favStatus }: any) => {
    const [loading, setloading] = useState<boolean>(false);

    const FavStory = async (e: any) => {
        setloading(true)
        e.preventDefault();
        e.stopPropagation();
        const userfromDb: any = await getUser();
        await addToFav(storyId);
        await mutate(userfromDb?.id);
        await mutate(storyId);
    };
    useEffect(() => {
        setloading(false)
    }, [favStatus]);

    return (
        <>
            {loading ? <CgSpinner className="animate-spin" size={20} /> :
                <button className="flex items-center" onClick={(e) => FavStory(e)}>
                    {favStatus ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z"
                                fill="#000"
                            ></path>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                                fill="#000"
                            ></path>
                        </svg>
                    )}
                </button>
            }
        </>
    )
}

export default FavComp