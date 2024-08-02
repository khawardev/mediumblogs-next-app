'use client'
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Topics = ({ userTags }: any) => {
    const { data, status } = useSession()
    console.log(status, 'statusstatus');


    return (
        <>

            {status === 'authenticated' ?
                <>
                    <Link href={'/addtopics'}>
                        <Plus />
                    </Link>
                    {userTags.map((tag: any, index: number) => (
                        <Link key={index} href={`/?tag/${tag.value}`} className="sohne font-bold text-sm">{tag.name}</Link>
                    ))}

                </>
                :
                <>
                    asadasd
                </>
            }






        </>
    )
}

export default Topics