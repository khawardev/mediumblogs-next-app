'use client'
import { getStorybyId, publishStory } from '@/actions/story';
import React, { useEffect, useState } from 'react'
import { toast } from '@/components/ui/use-toast';
import TagsInput from "@/components/story/TagsInput"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/Storydialog"
import Image from "next/image"
import { extractAndValidateContent } from '@/lib/storyCheckRegix';
import { TopicsAtom } from '@/context/atom';
import { useAtom } from 'jotai';
interface DialogButtonProps {
    title: string;
    size?: "default" | "sm" | "lg" | "icon" | "sign";
    variant?: string;
    className?: string;
    storyID: string,
    // publishStory: (topics: string) => void,
    username: string,
    setShowtags: React.Dispatch<React.SetStateAction<boolean>>;
    storyContent: string | null,
}

export const svg = () => {
    return (
        <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
            <circle
                className="opacity-10"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1"
            ></circle>
            <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
}
export function StoryShadcnDialog({ className, title, storyID, username, storyContent, setShowtags }: DialogButtonProps) {

    const result = extractAndValidateContent(storyContent);
    const [topics, setTopics] = useAtom(TopicsAtom);
    console.log('result --- ', result);

    const [publishing, setPublishing] = useState(false);
    // useEffect(() => {
    //     const fetchStorybyID = async () => {
    //         const res: any = await getStorybyId(storyID, false);
    //         console.log('Response from getStorybyId --- : ', res);
    //         if (res?.error) {
    //             toast({
    //                 title: res?.error,
    //             });
    //         }
    //         // else {
    //         //     const data = await contentFormate();
    //         // }
    //     };
    // }, []);


    const publishStoryFunc = async () => {
        setPublishing(true)
        try {

            const res: any = await publishStory(storyID, topics);
            setTopics([''])
            if (res?.error) {
                toast({
                    title: res?.error,
                });
            }
            setPublishing(false)
        } catch (error) {
            console.log('error in publishing the story')
        }
    }


    return (
        <section >
            <Dialog>

                {result?.error === 'No valid headings found' ?
                    ''
                    :
                    <DialogTrigger asChild>
                        <Button size={'sm'} className={className} variant={'outline'}  >{title}</Button>
                    </DialogTrigger>
                }


                <DialogContent className="sohne">
                    <main className="md:flex md:justify-between  gap-10 overflow-y-auto" >
                        <section className=" w-full  space-y-2" >
                            <p className=" text-xl sohne_bold">Story Preview</p>
                            <Image className=" w-full border border-gray-400 rounded-lg" src={result?.imageUrl} alt="" width={1000} height={1000} />
                            {/* <Image className=" w-full" src={fallbackurl} alt="" width={340} height={300} /> */}
                            <div className='line-clamp-1'>
                                <div className="markdown-body sohne_bold " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                            </div>
                            {/* <p className=" text-xl sohne_bold ">{result?.heading}</p> */}
                            <hr />
                            <div className=' line-clamp-2'>
                                <DialogDescription className="markdown-body" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />
                            </div>
                            {/* <DialogDescription>{result?.paragraph}</DialogDescription> */}
                            <hr className=" space-y-2" />
                            <div className=" md:block hidden">
                                <DialogDescription><span className=" sohne_bold">Note:</span> Changes here will affect how your story appears in public places like Medium homepage and in subscribers inboxes not the contents of the story itself.</DialogDescription>
                            </div>
                        </section>
                        <section className=" w-full  space-y-2" >
                            <hr className=" md:hidden block" />
                            <p className=" text-base sohne font-bold ">Publishing to: <span className="sohne_bold">{username}</span></p>
                            <DialogDescription>Add or change topics (up to 5) so readers know what your story is about</DialogDescription>
                            <TagsInput />

                            <DialogDescription className="md:block hidden ">Learn more about what happens to your post when you publish.</DialogDescription>
                            <Button onClick={publishStoryFunc} variant="green" size="sm" className="  sohne_bold" >
                                {publishing ? <div className=" flex-center gap-2">
                                    Publishing
                                    {svg()}
                                </div> : 'Publish Now'
                                }
                            </Button>
                        </section>
                    </main>
                </DialogContent>
            </Dialog>
        </section>
    )
}