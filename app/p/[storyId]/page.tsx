import { getStorybyId } from '@/actions/story';
import { getUser } from '@/actions/user';
import NavbarStory from '@/components/story/NavbarStory'
import AddNewStory from '@/components/story/AddNewStory';
import React from 'react'

const StoryID = async ({ params }: { params: { storyId: string } }) => {
    const story: any = await getStorybyId(params?.storyId, false);
    const user: any = await getUser();
    console.log('story content : ', story?.content);

    return (
        <div className="sm:w-9/12 m-auto">
            <div className='sm:px-0 px-4'>
                <NavbarStory storyContent={story?.content || ''} storyID={params?.storyId} currentUserName={user?.name || ''} />
            </div>
            <AddNewStory storyID={params?.storyId} storyContent={story?.content || ''} />
        </div>
    )
}

export default StoryID