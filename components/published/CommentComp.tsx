'use client'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import MultiComments from "./MultiComments"
import { useEffect, useState } from "react"
import { addStoryComment } from "@/actions/comments"
import { useToast } from "../ui/use-toast"
import LoadingIcon from "../loadingIcon"
import { NumberofComments } from '@/actions/comments';

export const date = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Pad month with leading zero
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${month} ${day} ${year}`;
    return formattedDate
}

type props = {
    username: string,
    userImage: string,
    storyId: string
}

export default function Component({ username, userImage, storyId }: props) {
    const { toast } = useToast()

    const [content, setContent] = useState<string>('')
    const [loading, setloading] = useState<boolean>(false)
    const [comment, setcomment] = useState<any>()
    const [noOfComments, setNoOfComments] = useState<any>(null);
    const AddComments = async () => {
        setloading(true)

        try {
            const comment: any = await addStoryComment(storyId, content)
            if (comment?.error) {
                toast({
                    title: comment?.error,
                })
                return;
            } else {
                setContent('')
                setcomment(comment)
                setloading(false)
                toast({
                    title: 'comment addded',
                })
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setNoOfComments(await NumberofComments(storyId));
        };
        fetchData();
    }, [loading === false]);

    return (
        <Sheet>
            {!username ? 'comments ...' :
                <SheetTrigger asChild>
                    <div className="flex items-center gap-1">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" className="ku">
                                <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                            </svg>
                        </button>
                        <p className="text-sm text-slate-400">{noOfComments}</p>
                    </div>
                </SheetTrigger>
            }
            <SheetContent side="right" className="overflow-y-auto sohne  w-full bg-background shadow-lg">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b  py-4">
                        <h3 className="text-lg font-semibold sohne_bold">Responses • {noOfComments}</h3>
                    </div>

                    <div className=" space-y-6 py-4  ">
                        <section className="border rounded-lg p-3 ">
                            <section className="flex items-center gap-4">
                                <Avatar className="w-10 h-10 border">
                                    <AvatarImage src={userImage} />
                                    <AvatarFallback>AC</AvatarFallback>
                                </Avatar>
                                {/* {username} */}
                                <section>
                                    <div className="font-bold sohne_bold">{username}</div>
                                    <div className="text-xs text-muted-foreground">{date()}</div>
                                </section>
                            </section>
                            <div className=" my-3">
                                <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your comment..." className="resize-none " />
                            </div>
                            <div className="flex flex-row-reverse gap-1 ">
                                <Button onClick={AddComments} className=" font-bold flex-center gap-1 " size={'sm'} variant="green">
                                    {loading ? <>Respond <LoadingIcon /></> : 'Respond'}
                                </Button>
                                <Button onClick={() => setContent('')} className=" font-bold border-none  " size={'sm'} variant={'outline'}>Cancel</Button>
                            </div>
                        </section>


                        <section className="space-y-6  ">
                            <MultiComments loading={loading} storyId={storyId} />
                        </section>

                    </div>
                </div>
            </SheetContent>
        </Sheet >
    )
}
