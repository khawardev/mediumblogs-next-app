'use client'
import AddTagsDialog from "@/shadcn/tagsDialog";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { Link } from 'next-view-transitions'
import WordsCarousel from "./WordsCarousel";
import { useState } from "react";
import { FaMedium } from "react-icons/fa6";

const Topics = ({ userTags, allTopics }: any) => {
    const { status } = useSession()
    // const [currentTag, setCurrentTag] = useState('');

    // const handleClick = (tag: any) => {
    //     setCurrentTag((prevTag) => (prevTag === tag ? '' : tag));
    // };
    const [currentTag, setCurrentTag] = useState("For You");

    const handleClick = (tag: any) => {
        setCurrentTag(tag);
    };
    return (
        <>
            {status === 'authenticated' &&
                <>
                    {/* /?tag=${userTag.value}   */}
                    <section className=" flex items-center justify-start gap-3 relative">
                        <AddTagsDialog allTopics={allTopics} />
                        <div className="sm:block hidden ">
                            {userTags.length <= 8 ? (
                                <>
                                    <div className="flex justify-start space-x-1">
                                        <Link
                                            href="/blogs"
                                            onClick={() => handleClick("For You")}
                                            className={` ${currentTag === "For You" && 'underline opacity-100'} flex-center gap-1 opacity-50 underline-offset-[19px] sm:decoration-2 decoration-1  sohne transition-all ease-in px-3`}
                                            style={{
                                                scrollSnapAlign: "start",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <FaMedium strokeWidth={1.25} size={20} /> Blogs
                                        </Link>

                                        {userTags.map((userTag: any, index: number) => (
                                            <Link
                                                key={index}
                                                href={`/blogs/?tag=${userTag.value}`}
                                                onClick={() => handleClick(userTag.value)}
                                                className={` ${currentTag === userTag.value && 'underline opacity-100'} opacity-50 underline-offset-[19px] sm:decoration-2 decoration-1 sohne transition-all ease-in px-3`}
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
                                <WordsCarousel allTopics={userTags} />
                            )}
                        </div>
                        {userTags.length <= 8 && (
                            <>
                                <div className="sm:hidden block">
                                    <WordsCarousel allTopics={userTags} />
                                </div>
                            </>
                        )}
                    </section>

                </>

            }
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