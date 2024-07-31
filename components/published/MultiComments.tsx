import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import ClapIcons from "../ClapIcons"
import { useEffect, useState } from "react"
import { getAllComments } from "@/actions/comments";
import { useToast } from "../ui/use-toast";



type props = {
    storyId: string,
    loading?: boolean
}


const MultiComments = ({ storyId, loading }: props) => {
    const { toast } = useToast()
    const [comments, setComments] = useState<any>();

    useEffect(() => {
        const fetchcomments = async () => {
            try {
                const comments: any = await getAllComments(storyId);
                if (comments.length) {
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
    }, [loading === false]);


    const calculateDaysAgo = (createdAt: Date) => {
        const currentDate = new Date();
        const createdDate = new Date(createdAt);
        const timeDifference: number = currentDate.getTime() - createdDate.getTime();
        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysAgo;
    };


    return (
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
                                <div className="font-semibold">{comment?.auther?.name}</div>
                                <div className="text-xs text-muted-foreground">{calculateDaysAgo(comment?.createdAt)} days ago</div>
                            </div>
                            <div className="break-words break-all">{comment?.content}</div>
                            <section className=" mt-2 flex-between">
                                <section className="flex gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"
                                        ></path>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" className="ku">
                                        <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                                    </svg>
                                </section>
                                <p>Reply</p>
                            </section>
                        </div>
                    </div>
                );
            })}
        </>

    )
}


export default MultiComments