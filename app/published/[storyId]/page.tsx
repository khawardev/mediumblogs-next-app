import { getClapsCountByStory, getStoryClapCountByUser } from '@/actions/claps';
import { NumberofComments } from '@/actions/comments';
import { checkFav } from '@/actions/favorite';
import { getStorybyId } from '@/actions/story';
import { getUser, getUserbyID } from '@/actions/user';
import PublishedStory from '@/components/published/PublishedStory';
import React from 'react'

const Published = async ({ params }: { params: { storyId: string } }) => {

    const publishedStory: any = await getStorybyId(params?.storyId, true);
    if (!publishedStory) {
        return (
            <>No story found</>
        )
    }
    const userDetail: any = await getUserbyID(publishedStory?.userId);
    const noOfComments: any = await NumberofComments(publishedStory?.id);
    const favStatus: any = await checkFav(publishedStory?.id);
    const allClaps: any = await getClapsCountByStory(publishedStory?.id);
    const currentUser: any = await getUser();
    const ClapsCountByUser = await getStoryClapCountByUser(publishedStory?.id);
    return (
        <PublishedStory clapByUser={ClapsCountByUser?.clapCount} favStatus={favStatus} noOfComments={noOfComments} allClaps={allClaps} currentUser={currentUser} publishedStory={publishedStory} userParams={userDetail?.id} userImage={userDetail?.image} username={userDetail?.name} />
    )
}

export default Published