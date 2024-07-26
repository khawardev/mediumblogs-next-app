import { getStorybyId } from '@/actions/story';
import { getUser } from '@/actions/user';
import NavbarStory from '@/components/story/NavbarStory'
import NewStory from '@/components/story/NewStory';
import React from 'react'

const StoryID = async ({ params }: { params: { storyId: string } }) => {
    const story: any = await getStorybyId(params?.storyId, false);
    const user: any = await getUser();

    return (
        <div className="sm:w-9/12 m-auto sm:px-0 px-4  md:py-10 py-5">
            <NavbarStory storyID={params?.storyId} currentUserName={user?.name || ''} />

            <NewStory storyID={params?.storyId} storyContent={story?.content || ''}  />

        </div>
    )
}

export default StoryID