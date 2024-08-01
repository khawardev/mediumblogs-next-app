import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { getAllComments } from "@/actions/comments";
import { useToast } from "../../ui/use-toast";
import UserEngagement from "../replies/UserEngagement";
import { CgSpinner } from "react-icons/cg";
import { useAtom } from "jotai";
import { savingReplyAtom } from "@/context/atom";


export const CalculateDaysAgo = (createdAt: any) => {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference: number = currentDate.getTime() - createdDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysAgo;
}
type props = {
    storyId: string,
    loading?: boolean
    noOfComments: number
    userImage?: string;
    username?: string
}


const MultiComments = ({ noOfComments, storyId, loading, userImage, username }: props) => {
    const { toast } = useToast()
    const [comments, setComments] = useState<any>();
    const [replySaving, setReplySaving] = useAtom(savingReplyAtom);

    useEffect(() => {
        const fetchcomments = async () => {
            try {
                const comments: any = await getAllComments(storyId);
                if (comments?.length) {
                    setComments(comments)
                }

            } catch (error) {
                toast({
                    title: comments.error,
                })
                return;
            }
        }
        fetchcomments()
    }, [loading === false, replySaving === false]);

    return (
        <>
            {noOfComments === 0 ?
                <div className="py-40 flex items-center justify-center">
                    No comment Availaible
                </div>
                :
                !comments ?
                    <div className="md:py-40 py-32 flex items-center justify-center">
                        <CgSpinner className="animate-spin" size={24} />
                    </div>
                    :
                    <>
                        {comments?.slice().reverse().map((comment: any, index: number) => {
                            const clapCounts = comment?.clap?.map((clap: any) => clap?.clapCount);
                            const totalClaps = clapCounts?.reduce((acc: any, curr: number) => acc + curr, 0);

                            return (
                                <div key={index} className="flex   gap-4 text-sm">
                                    <Avatar className="w-10 h-10 border">
                                        <AvatarImage src={comment?.auther?.image} />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div className=" flex w-full flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="font-bold sohne_bold">{comment?.auther?.name}</div>
                                            <div className="text-xs text-muted-foreground">{CalculateDaysAgo(comment?.createdAt)} days ago</div>
                                        </div>
                                        <div className="break-words break-all">{comment?.content}</div>
                                        <UserEngagement userImage={userImage} username={username} comment={comment} totalCommentClaps={totalClaps} />
                                    </div>
                                </div>
                            );
                        })}
                    </>

            }
        </>

    )
}


export default MultiComments