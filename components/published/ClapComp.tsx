"use client";
import { getClapCountByUser, updateClapStoryCount, updateCommentOrReplyCount } from "@/actions/claps";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import ClapIcons from "../ClapIcons";

type ClapCountCompProps = {
    // clapCount: any;
    // userClaps: any;

    storyId: any;
    currentUser: string,
    allClapsCount: string,
    commentId?: string,
    type?: string,

};

const ClapCountComp = ({ allClapsCount, currentUser, storyId, commentId, type }: ClapCountCompProps) => {
    const [clapByUser, setClapByUser] = useState<any>(0);
    const [allClaps, setAllClaps] = useState<any>(allClapsCount);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { toast } = useToast()


    useEffect(() => {
        const fetchClapCount = async () => {
            const ClapsCountByUser = await getClapCountByUser(storyId);
            setClapByUser(ClapsCountByUser?.clapCount);
        };
        fetchClapCount();
    }, [allClaps]);


    const clapStoryOrComment = async () => {
        if (!currentUser) {
            toast({
                title: 'Please Login to continue',
            })
            return;
        }
        if (clapByUser >= 20) {
            toast({
                title: 'Max 20 claps are allowed',
            })
            return;
        }
        setAllClaps((prev: any) => prev + 1);
        setIsButtonDisabled(true);

        try {
            if (!commentId) {
                await updateClapStoryCount(storyId);
                setIsButtonDisabled(false);
            } else {
                await updateCommentOrReplyCount(storyId, commentId, type);
            }
        } catch (error) {
            // setAllClaps((prev: any) => prev - 1);
            // setClapByUser((prev: any) => prev - 1);
            toast({
                title: 'Error while clapping story or comment or reply',
            })
        }

    };

    return (
        <section className="flex-center gap-1">
            <button disabled={isButtonDisabled} onClick={(e) => { e.preventDefault(); clapStoryOrComment() }}>
                <ClapIcons clapByUser={clapByUser} />
            </button>
            <p className="text-sm text-slate-400">{allClaps}</p>
        </section>
    );
};

export default ClapCountComp;