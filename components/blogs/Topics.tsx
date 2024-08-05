'use client'
import AddTagsDialog from "@/shadcn/tagsDialog";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { Link } from 'next-view-transitions'
import WordsCarousel from "./WordsCarousel";
import { useState } from "react";

const Topics = ({ userTags, allTopics }: any) => {
    const { status } = useSession()
    const [currentTag, setCurrentTag] = useState('');

    const handleClick = (tag: any) => {
        setCurrentTag((prevTag) => (prevTag === tag ? '' : tag));
    };
    return (
        <>
            {status === 'authenticated' &&
                <>
                    <section className=" flex items-center justify-start gap-3">
                        <AddTagsDialog allTopics={allTopics} />
                        {userTags.length <= 10 ?
                            <div className="flex justify-start space-x-2 text-sm ">
                                {userTags.map((userTag: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={currentTag === userTag.value ? `/blogs` : `/blogs/?tag=${userTag.value}`}
                                        onClick={() => handleClick(userTag.value)}
                                        className={` ${currentTag === userTag.value ? ' border-2 border-green-600/50' : ' border'}  sohne font-bold border-green-200  bg-green-100 transition-all ease-in  rounded-full  py-1 px-4  `}
                                        style={{
                                            scrollSnapAlign: "start", // Align each item to start at the beginning of the container
                                            flexShrink: 0, // Prevent items from shrinking
                                        }}
                                    >
                                        {userTag.value}
                                    </Link>
                                ))}
                            </div>
                            : <WordsCarousel allTopics={userTags} />
                        }
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