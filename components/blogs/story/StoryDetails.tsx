'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { storyCheckRegix } from "@/lib/storyCheckRegix";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import FavComp from "@/components/published/favorite/FavComp";
import ShareComp from "@/components/published/share/ShareComp";

const StoryDetails = ({ story }: any) => {
    // const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9', 'tag10'];
    // const [result, setResult] = useState();
    const router = useRouter()
    const result: any = storyCheckRegix(story?.content);

    useEffect(() => {

    }, []);

    // onClick = {() => router.push(`/published/${story?.id}`)}
    return (
        <main className=" sohne font-bold  sm:px-4 cursor-pointer py-10  border-b sm:hover:bg-gray-100 transition-all  duration-75 ">
            <main className="flex-between  gap-10 " onClick={() => router.push(`/published/${story?.id}`)}>
                <section className=" space-y-5 w-full" >
                    <div className="space-y-3   " >
                        <div className=" flex items-center gap-3">
                            <Avatar className="w-10 h-10 border">
                                <AvatarImage src={story?.auther.image} />
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <div className=" leading-4">
                                <p className=" ">{story?.auther.name}</p>
                                <p className=" text-sm text-muted-foreground  ">{new Date(story?.createdAt).toDateString().split(' ')?.slice(1, 4).join(' ')}</p>
                            </div>
                        </div>
                        <div className="sm:space-y-3 space-y-1">
                            <div className="markdown-body  sm:text-3xl text-xl sohne_bold font-bold line-clamp-1 " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                            <div className="markdown-body sohne text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />

                            {/* <p className="sm:text-3xl text-xl sohne_bold font-bold line-clamp-1">Review Academic Science is Dying</p> */}
                            {/* <p className=" text-muted-foreground line-clamp-2"> The research peer review  The research peer review system needs to be rethought The research peer review system needs to be rethought The research peer review system needs to be rethoughtThe research peer review system needs to be rethought</p> */}
                        </div>
                    </div>
                </section>
                <section className="w-[30%] flex flex-row-reverse col-span-3   " >
                    <Image className=" rounded border  w-full   " src={result?.imageUrl} quality={100} alt="blog image" width={200} height={200} />
                </section>
            </main>
            <section className="flex-between w-[72%]   text-sm mt-4">
                <div className="flex-center gap-2">
                    <div className="flex-center sm:flex hidden  gap-3 flex-wrap">
                        {story?.topics.slice(0, 3).map((tag: any, index: number) => (
                            <>
                                <Link
                                    key={index}
                                    href={`/?tag/${tag}`}
                                    className="sohne font-bold border  bg-gray-100 transition-all ease-in  rounded-full  py-1 px-4  "
                                >
                                    {tag}
                                </Link>
                            </>
                        ))}
                        {story?.topics.length > 3 && (
                            <p className="py-1 px-4 border bg-gray-100 rounded-full">
                                +{story?.topics.length - 3}
                            </p>
                        )}
                    </div>
                    <div className="flex-center sm:hidden flex gap-3 flex-wrap">
                        {story?.topics.slice(0, 1).map((tag: any, index: number) => (
                            <p key={index} className="py-1 px-4 border bg-gray-100 rounded-full">
                                {tag}
                            </p>
                        ))}
                        {story?.topics.length > 1 && (
                            <p className="py-1 px-4 border bg-gray-100 rounded-full">
                                +{story?.topics.length - 1}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex-center gap-2 ">
                    <FavComp storyId={story?.id} />
                    <ShareComp />
                </div>
            </section>

        </main>
    )
}

export default StoryDetails