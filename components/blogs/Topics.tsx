'use client'
import AddTagsDialog from "@/shadcn/tagsDialog";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import WordsCarousel from "./WordsCarousel";

const Topics = ({ userTags, allTopics }: any) => {
    const { status } = useSession()
    return (
        <>
            {status === 'authenticated' ?
                <>
                    <section className=" flex items-center justify-start gap-3">
                        <AddTagsDialog allTopics={allTopics} />
                        {userTags.length <= 10 ?
                            <div className="flex justify-start space-x-2 text-sm ">
                                {userTags.map((allTopic: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={`/?tag/${allTopic.value}`}
                                        className="sohne font-bold border bg-gray-100 transition-all ease-in  rounded-full  py-1 px-4  "
                                        style={{
                                            scrollSnapAlign: "start", // Align each item to start at the beginning of the container
                                            flexShrink: 0, // Prevent items from shrinking
                                        }}
                                    >
                                        {allTopic.value}
                                    </Link>
                                ))}
                            </div>
                            : <WordsCarousel allTopics={userTags} />
                        }
                    </section>

                </>
                :
                <>
                    <section>
                        <WordsCarousel allTopics={allTopics} />
                    </section>
                </>
            }
        </>
    )
}

export default Topics