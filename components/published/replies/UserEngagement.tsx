import { useEffect, useState } from 'react'
import { ClapCountByUser } from '@/actions/claps';
import CommentClapComp from '@/components/published/comments/CommentClapComp';
import ReplyArea from './ReplyArea';
import MultiReplys from './MultiReplys';

const UserEngagement = ({ totalCommentClaps, comment, userImage, username }: any) => {
    const [showReplyArea, setShowReplyArea] = useState<boolean>(false);
    const [showReplyComments, setShowReplyComments] = useState<boolean>(false);
    const [userClaps, setUserClaps] = useState<number>();

    useEffect(() => {
        const fetchClapCountByUser = async () => {
            try {
                const claps: any = await ClapCountByUser(comment.storyId, comment.id);
                setUserClaps(claps);
            } catch (error) {
                console.log("Error in fetching user claps");
            }
        };

        fetchClapCountByUser();
    }, [comment]);

    return (
        <>
            <section className=" mt-2 flex-between">
                <section className="flex space-x-5">
                    <CommentClapComp type='commentId' commentId={comment?.id} userClaps={userClaps} totalCommentClaps={totalCommentClaps} storyId={comment.storyId} />
                    {comment?.reply?.length > 0 &&
                        <button className='flex-center gap-1' onClick={() => setShowReplyComments(!showReplyComments)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" className="ku">
                                <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                            </svg>
                            <p className="text-sm text-slate-400 sohne font-bold">{comment?.reply?.length} Replies</p>
                        </button>
                    }
                </section>
                <button onClick={() => setShowReplyArea(!showReplyArea)} className=" sohne font-bold text-sm text-slate-400" >Reply</button>
            </section>
            <section>

                {showReplyArea &&
                    <ReplyArea setShowReplyArea={setShowReplyArea} commentId={comment?.id} username={username} storyId={comment?.storyId} userImage={userImage} />
                }
                {showReplyComments && <MultiReplys commentId={comment} replies={comment?.reply} />}

            </section>
        </>
    )
}

export default UserEngagement