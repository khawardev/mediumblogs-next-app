'use client'
import { getStorybyId } from '@/actions/story';
import React, { useEffect } from 'react'
import { toast } from '@/components/ui/use-toast';
import TagsInput from "@/components/story/TagsInput"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Storydialog"
import Image from "next/image"
import { extractAndValidateContent } from '@/lib/storyCheckRegix';
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


export function StoryShadcnDialog({ className, title, storyID, username, storyContent, setShowtags }: DialogButtonProps) {

    const result = extractAndValidateContent(storyContent);

    const fallbackurl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637'



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
                                <div className="markdown-body sohne_bold not-italic" dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
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
                            <Button variant="green" size="sm" className="  sohne_bold" >Publish</Button>
                        </section>
                    </main>
                </DialogContent>
            </Dialog>
        </section>
    )
}


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