'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { storyCheckRegix } from "@/lib/storyCheckRegix";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import FavComp from "@/components/published/favorite/FavComp";
import ShareComp from "@/components/published/share/ShareComp";
import StoryTags from "./StoryTags";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/shadcn/DeleteDialog";
import { PencilLine } from "lucide-react";

const StoryInDetails = ({ story, favStatus, profilepublishedEditDelete }: any) => {
    const router = useRouter()
    const result: any = storyCheckRegix(story?.content);

    return (
        <main className="sm:px-5 cursor-pointer py-8  border-b sm:hover:bg-gray-100 transition-all  duration-75 " onClick={() => router.push(`/published/${story?.id}`)}>
            <main className="sm:flex flex-between flex sm:flex-row flex-col-reverse sm:gap-10 gap-5 " >
                <section className=" space-y-5 w-full" >
                    <div className="sm:space-y-3  space-y-5  " >
                        {profilepublishedEditDelete &&
                            <>
                                <div className=" sm:hidden flex items-center gap-2">
                                    <Button size={'xs'} variant={'outline'} className=" w-full sohne font-bold transition-all ease-in rounded-full  px-4 flex-center gap-2 "><PencilLine size={'14'} strokeWidth={2.8} />Edit</Button>
                                    <DeleteDialog storyId={story?.id} />
                                </div>
                            </>

                        }
                        <section className=" flex  items-center gap-8">

                            <section className="flex  items-center gap-3">
                                <Avatar className="w-10 h-10 border sohne font-bold">
                                    <AvatarImage src={story?.auther?.image} />
                                    <AvatarFallback><Skeleton className="w-10 h-10 rounded-full" /></AvatarFallback>
                                </Avatar>
                                <div className=" leading-4">
                                    <p className=" sohne_bold whitespace-nowrap">{story?.auther?.name}</p>
                                    <p className="sohne font-bold text-sm text-muted-foreground  ">{new Date(story?.createdAt).toDateString().split(' ')?.slice(1, 4).join(' ')}</p>
                                </div>
                            </section>
                            {profilepublishedEditDelete &&
                                <>
                                    <div className=" sm:flex hidden items-center gap-2">
                                        <Button size={'xs'} variant={'outline'} className="sohne font-bold transition-all ease-in rounded-full  px-4 flex-center gap-2 "><PencilLine size={'14'} strokeWidth={2.8} />Edit</Button>
                                        <DeleteDialog storyId={story?.id} />
                                    </div>
                                </>

                            }
                        </section>
                        <section className="sm:space-y-3 space-y-1">
                            <div className="markdown-body  sm:text-2xl text-xl sohne_bold font-bold line-clamp-1 " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                            <div className="markdown-body sohne leading-5  text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />
                        </section>
                    </div>
                    <section className="  sm:flex hidden     items-center justify-between gap-2  w-full  text-sm  " >
                        <StoryTags story={story} limit={2} />
                        <div className="flex-center gap-2 ">
                            <FavComp favStatus={favStatus} storyId={story?.id} />
                            <ShareComp pathname={`/published/${story?.id}`} />
                        </div>
                    </section>
                </section>
                <section className="  sm:w-[50%] w-full  "  >
                    <Image className=" rounded-md border  sohne  " src={result?.imageUrl ? result?.imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637'} quality={100} alt="blog image" width={1000} height={1000} />
                </section>
            </main>
            <section className=" sm:hidden    flex items-center justify-between gap-2  w-full  mt-4  text-sm ">
                <StoryTags story={story} limit={1} />
                <div className="flex-center gap-2 ">
                    <FavComp favStatus={favStatus} storyId={story?.id} />
                    <ShareComp />
                </div>
            </section>
        </main>
    )
}

export default StoryInDetails