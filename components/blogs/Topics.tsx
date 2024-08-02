'use client'
import AddTagsDialog from "@/shadcn/tagsDialog";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import WordsCarousel from "./WordsCarousel";

const Topics = ({ userTags, allTopics }: any) => {
    const { status } = useSession()
    console.log(userTags, 'statusstatus');
    return (
        <>
            {status === 'authenticated' ?
                <>
                    <section className=" flex-center gap-2">
                        <AddTagsDialog allTopics={allTopics} />

                        {/* {userTags.length > 0 && (
                            userTags.length > 10 ? (
                                <WordsCarousel allTopics={userTags} />
                            ) : (
                                <section className="flex-center space-x-3 w-full text-sm">
                                    {userTags.map((userTag: any, index: number) => (
                                        <Link
                                            key={index}
                                            href={`/?tag=${encodeURIComponent(userTag.value)}`}
                                            className="sohne font-bold border bg-gray-100 rounded-full py-1 px-4"
                                        >
                                            {userTag.value}
                                        </Link>
                                    ))}
                                </section>
                            )
                        )} */}
                        <WordsCarousel allTopics={allTopics} />

                    </section>

                </>
                :
                <>
                    <section>
                        {allTopics.length > 10 ? (
                            <WordsCarousel allTopics={allTopics} />

                        ) : (
                            <section className="flex-center space-x-3 w-full  text-sm">
                                {allTopics.map((allTopic: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={`/?tag=${encodeURIComponent(allTopic.value)}`}
                                        className="sohne font-bold border bg-gray-100 rounded-full py-1 px-4"
                                    >
                                        {allTopic.value}
                                    </Link>
                                ))}
                            </section>

                        )}
                    </section>
                </>
            }
        </>
    )
}

export default Topics