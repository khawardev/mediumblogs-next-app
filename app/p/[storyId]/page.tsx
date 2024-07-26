import { getStorybyId } from '@/actions/story';
import { getUser } from '@/actions/user';
import NavbarStory from '@/components/story/NavbarStory'
import NewStory from '@/components/story/NewStory';
import React from 'react'

const StoryID = async ({ params }: { params: { storyId: string } }) => {
    const story: any = await getStorybyId(params?.storyId, false);
    const user: any = await getUser();

    return (
        <div className="mobile_center py-10">
            <NavbarStory storyID={params?.storyId} currentUserName={user?.name || ''} />

            <NewStory storyID={params?.storyId} storyContent={story?.content || ''}  />

        </div>
    )
}

export default StoryID