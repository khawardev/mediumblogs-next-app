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
                    <section className=" flex items-center justify-start gap-2">
                        <AddTagsDialog allTopics={allTopics} />










                        <WordsCarousel allTopics={userTags} />
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