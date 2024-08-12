'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { storyCheckRegix } from "@/lib/storyCheckRegix";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import FavComp from "@/components/published/favorite/FavComp";
import ShareComp from "@/components/published/share/ShareComp";
import StoryTags from "./StoryTags";
import { Skeleton } from "@/components/ui/skeleton";

const PublishedStoryInDetails = ({ story, favStatus }: any) => {
    const router = useRouter()
    const result: any = storyCheckRegix(story?.content);

    return (
        <main className=" flex flex-col justify-between cursor-pointer pb-4  " onClick={() => router.push(`/published/${story?.id}`)}>
            <main>
                <section   >
                    <Image className=" rounded border  sohne w-full  h-[180px]" src={result?.imageUrl ? result?.imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637'} quality={100} alt="blog image" width={1000} height={1000} />
                </section>
                <section className=" mt-4 w-full" >
                    <div className="sm:space-y-3  space-y-5  " >
                        <section className=" flex  items-center gap-3">
                            <Avatar className="w-10 h-10 border sohne font-bold">
                                <AvatarImage src={story?.auther?.image} />
                                <AvatarFallback><Skeleton className="w-10 h-10 rounded-full" /></AvatarFallback>
                            </Avatar>
                            <div className=" leading-4">
                                <p className=" sohne_bold whitespace-nowrap">{story?.auther?.name}</p>
                                <p className="sohne font-bold text-sm text-muted-foreground  ">{new Date(story?.createdAt).toDateString().split(' ')?.slice(1, 4).join(' ')}</p>
                            </div>
                        </section>
                        <section className=" space-y-1">
                            <div className="markdown-body  text-xl sohne_bold font-bold line-clamp-1 " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                            <div className="markdown-body sohne leading-5  text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />
                        </section>
                    </div>
                </section>
            </main>
            <main className=" flex mt-4 flex-between gap-2  w-full    text-sm ">
                <StoryTags story={story} limit={1} />
                <div className="flex-center gap-2 ">
                    <FavComp favStatus={favStatus} storyId={story?.id} />
                    <ShareComp />
                </div>
            </main>
        </main>
    )
}

export default PublishedStoryInDetails