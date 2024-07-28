'use client'
import { getStorybyId } from '@/actions/story';
import React, { useEffect } from 'react'
import { toast } from '../ui/use-toast';

type props = {
    storyID: string,
    publishStory: (topics: string) => void,
    username: string,
    setShowtags: React.Dispatch<React.SetStateAction<boolean>>;
}


const StoryTags = ({ storyID, username, publishStory, setShowtags }: props) => {
    useEffect(() => {
        const fetchStorybyID = async () => {
            const res: any = await getStorybyId(storyID, false);
            console.log('Response from getStorybyId --- : ', res);
            if (res?.error) {
                toast({
                    title: res?.error,
                });
            }
            // else {
            //     const data = await contentFormate();
            // }
        };


    }, []);

    return (
        <div>StoryTags</div>
    )
}

export default StoryTags
