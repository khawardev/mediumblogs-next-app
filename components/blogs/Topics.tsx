'use client'
import AddTagsDialog from "@/shadcn/tagsDialog";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { Link } from 'next-view-transitions'
import WordsCarousel from "./WordsCarousel";
import { useState } from "react";
import { FaMedium } from "react-icons/fa6";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Topics = ({ userTags, allTopics }: any) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const queryString = searchParams.toString();
    const fullUrl = `${pathname}?${queryString}`;

    return (
        <>
            <section className=" flex items-center justify-start gap-3 relative text-sm  font-bold">
                <AddTagsDialog allTopics={allTopics} />
                <div className="sm:block hidden ">
                    {userTags?.length <= 8 ? (
                        <>
                            <div className="flex justify-start space-x-1">
                                <Link
                                    href="/blogs"
                                    className={` ${fullUrl === "/blogs?" ? 'underline opacity-90 ' : 'opacity-50 '} flex-center gap-1 underline-offset-[19px] sm:decoration-2 decoration-1  sohne transition-all ease-in px-3`}
                                    style={{
                                        scrollSnapAlign: "start",
                                        flexShrink: 0,
                                    }}
                                >
                                    For You
                                </Link>

                                {userTags?.map((userTag: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={`/blogs/?tag=${userTag.value}`}
                                        className={`${pathname === "/blogs" && searchParams.get('tag') === userTag.value ? 'underline opacity-90' : 'opacity-50'} underline-offset-[19px] sm:decoration-2 decoration-1 sohne transition-all ease-in px-3`}
                                        style={{
                                            scrollSnapAlign: "start",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {userTag.value}
                                    </Link>

                                ))}
                            </div>
                        </>
                    ) : (
                        <WordsCarousel fullUrl={fullUrl} pathname={pathname} searchParams={searchParams} allTopics={userTags} />
                    )}
                </div>
                {userTags?.length > 0 && (
                    <>
                        <div className="sm:hidden block">
                            <WordsCarousel fullUrl={fullUrl} pathname={pathname} searchParams={searchParams} allTopics={userTags} />
                        </div>
                    </>
                )}
            </section>

        </>
    )
}

export default Topics

// :
// <>
//     <section>
//         <WordsCarousel allTopics={allTopics} />
//     </section>
// </>