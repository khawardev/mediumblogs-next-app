import { getStorybyId } from '@/actions/story';
import { getUserbyID } from '@/actions/user';
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

    return <PublishedStory publishedStory={publishedStory} userImage={userDetail?.image} username={userDetail?.name} />
}

export default Published