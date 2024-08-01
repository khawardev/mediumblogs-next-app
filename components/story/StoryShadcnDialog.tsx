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
import { storyCheckRegix } from '@/lib/storyCheckRegix';
import { TopicsAtom } from '@/context/atom';
import { useAtom } from 'jotai';
// import LoadingIcon from '../loadingIcon';
import { CgSpinner } from "react-icons/cg";

interface DialogButtonProps {
    title: string;
    size?: "default" | "sm" | "lg" | "icon" | "sign";
    variant?: string;
    className?: string;
    storyID: string,
    username: string,
    setShowtags: React.Dispatch<React.SetStateAction<boolean>>;
    storyContent: string | null,
}


export function StoryShadcnDialog({ className, title, storyID, username, storyContent, setShowtags }: DialogButtonProps) {

    const result: any = storyCheckRegix(storyContent);
    const [topics, setTopics] = useAtom(TopicsAtom);
    const [publishing, setPublishing] = useState(false);

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

                {!result?.error &&
                    <>
                        <DialogTrigger asChild>
                            <Button size={'sm'} className={className} variant={'outline'}  >{title}</Button>
                        </DialogTrigger>
                    </>
                }


                <DialogContent className="sohne">
                    <main className="md:flex md:justify-between  gap-10 overflow-y-auto" >
                        <section className=" w-full  space-y-2" >
                            <p className=" text-xl sohne_bold">Story Preview</p>
                            <Image className=" w-full border border-gray-400 rounded-lg" src={result?.imageUrl} alt="" width={1000} height={1000} />
                            <div className='line-clamp-1'>
                                <div className="markdown-body sohne_bold " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                            </div>
                            <hr />
                            <div className=' line-clamp-2'>
                                <DialogDescription className="markdown-body" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />
                            </div>
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
                                    <CgSpinner className="animate-spin" size={20} />
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