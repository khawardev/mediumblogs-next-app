"use client";
import { getCommentClapCountByUser, updateCommentOrReplyCount } from "@/actions/claps";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import ClapIcons from "@/components/ClapIcons";

type ClapCountCompProps = {
    userClaps?: any;
    storyId: any;
    currentUser?: string,
    totalCommentClaps: string,
    commentId: string,
    type?: string,

};

const CommentClapComp = ({ totalCommentClaps, storyId, type, commentId }: ClapCountCompProps) => {
    const [clapByUser, setClapByUser] = useState<any>(0);
    const [allClaps, setAllClaps] = useState<any>(totalCommentClaps);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { toast } = useToast()


    useEffect(() => {
        const fetchClapCount = async () => {
            const ClapsCountByUser = await getCommentClapCountByUser(storyId, commentId);
            setClapByUser(ClapsCountByUser?.clapCount);
        };
        fetchClapCount();
    }, [allClaps]);


    const clapStoryOrComment = async () => {

        if (clapByUser >= 20) {
            toast({
                title: 'Max 20 claps are allowed',
            })
            return;
        }
        setAllClaps((prev: any) => prev + 1);
        setIsButtonDisabled(true);

        try {
            if (commentId) {
                await updateCommentOrReplyCount(storyId, commentId, type);
                setIsButtonDisabled(false);
            }

        } catch (error) {
            // setAllClaps((prev: any) => prev - 1);
            // setClapByUser((prev: any) => prev - 1);
            toast({
                title: 'Error while clapping story',
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

export default CommentClapComp;