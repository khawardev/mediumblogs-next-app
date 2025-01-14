import { Button } from '../../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { CgSpinner } from "react-icons/cg";
import { useToast } from '../../ui/use-toast';
import { useState } from 'react';
import { addStoryComment } from '@/actions/comments';
import { useAtom } from 'jotai';
import { savingReplyAtom } from '@/context/atom';
export const date = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Pad month with leading zero
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${month} ${day} ${year}`;
    return formattedDate
}
const ReplyArea = ({ commentId, setShowReplyArea, userImage, username, storyId }: any) => {

    const [content, setContent] = useState<string>('')
    const { toast } = useToast()
    // const [reply, setReply] = useState<string>('')
    const [replySaving, setReplySaving] = useAtom(savingReplyAtom);

    const AddReplies = async () => {
        setReplySaving(true)
        try {
            const reply: any = await addStoryComment(storyId, content, commentId)


            if (reply?.error) {
                toast({
                    title: reply?.error,
                })
                return;
            } else {
                setContent('')
                // setReply(reply)
                setReplySaving(false)
                toast({
                    title: 'reply added',
                })
            }

        } catch (error) {

        }
    }
    return (
        <div className='mt-2'>
            <section className="mt-2 flex items-center gap-4">
                <Avatar className="w-10 h-10 border sohne font-bold">
                    <AvatarImage src={userImage} />
                    <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                {/* {username} */}
                <section>
                    <div className=" sohne font-bold ">{username}</div>
                    <div className="text-xs text-muted-foreground sohne font-bold ">{date()}</div>
                </section>
            </section>
            <div className=" my-3">
                <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your reply..." className="resize-none sohne font-bold" />
            </div>
            <div className="flex flex-row-reverse gap-1 ">
                <Button onClick={AddReplies} className="flex-center gap-1 sohne font-bold" size={'sm'} variant="green">
                    {replySaving ? <>Respond <CgSpinner className="animate-spin" size={16} /></> : 'Respond'}
                </Button>
                <Button onClick={() => { setShowReplyArea(false); setContent('') }} className=" d border-none sohne font-bold " size={'sm'} variant={'outline'}>Cancel</Button>
            </div>

        </div>
    )
}

export default ReplyArea