'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { storyCheckRegix } from "@/lib/storyCheckRegix";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import FavComp from "@/components/published/favorite/FavComp";
import ShareComp from "@/components/published/share/ShareComp";
import StoryTags from "./StoryTags";
import { checkFav } from "@/actions/favorite";

const StoryDetails = ({ story, auther, favStatus }: any) => {
    const router = useRouter()
    const result: any = storyCheckRegix(story?.content);
    const checkFavFunc = async (storyId: string) => {
        return await checkFav(storyId);
    }

    return (
        <main className="sm:px-5 cursor-pointer py-8  border-b sm:hover:bg-gray-100 transition-all  duration-75 " onClick={() => router.push(`/published/${story?.id}`)}>
            <main className="flex-between  sm:gap-10 gap-5 " >
                <section className=" space-y-5 w-full" >
                    <div className="sm:space-y-3  space-y-5  " >
                        <section className=" flex  items-center gap-3">
                            <Avatar className="w-10 h-10 border sohne font-bold">
                                <AvatarImage src={story?.auther?.image} />
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <div className=" leading-4">
                                <p className=" sohne_bold whitespace-nowrap">{auther ? auther?.name : story?.auther?.name}</p>
                                <p className="sohne font-bold text-sm text-muted-foreground  ">{new Date(story?.createdAt).toDateString().split(' ')?.slice(1, 4).join(' ')}</p>
                            </div>
                        </section>
                        <section className="sm:space-y-3 space-y-1">
                            <div className="markdown-body  sm:text-2xl text-xl sohne_bold font-bold line-clamp-1 " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                            <div className="markdown-body sohne leading-5  text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />
                        </section>
                    </div>
                    <section className=" sm:flex hidden flex-between gap-2  w-full  text-sm  " >
                        <StoryTags story={story} limit={2} />
                        <div className="flex-center gap-2 ">
                            <FavComp favStatus={checkFavFunc(story?.id)} storyId={story?.id} />
                            <ShareComp pathname={`/published/${story?.id}`} />
                        </div>
                    </section>
                </section>
                <section className=" w-[50%] flex flex-row-reverse   "  >
                    <Image className=" rounded border  sohne  " src={result?.imageUrl} quality={100} alt="blog image" width={1000} height={1000} />
                </section>
            </main>
            <section className=" sm:hidden flex mt-4 flex-between gap-2  w-full    text-sm ">
                <StoryTags story={story} limit={1} />
                <div className="flex-center gap-2 ">
                    <FavComp storyId={story?.id} />
                    <ShareComp />
                </div>
            </section>
        </main>
    )
}

export default StoryDetails