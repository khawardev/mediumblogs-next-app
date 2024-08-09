'use client';
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { BiMenu } from "react-icons/bi"
import { useEffect, useRef, useState } from "react"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
import { getUser } from "@/actions/user";

interface DialogButtonProps {
    title: string;
    content: string;
    onClick?: () => void; // Add onClick as an optional prop
}
export function PopoverButton() {
    const [userFromDb, setUsrfromDb] = useState<any>()
    const popoverRef = useRef<HTMLDivElement>(null)
    const { data, status } = useSession()

    useEffect(() => {
        const fetchuser = async () => {
            const userfromDb: any = await getUser();
            setUsrfromDb(userfromDb);
        }
        fetchuser();
    }, []);

    return (
        <Popover>
            {status === 'authenticated' ?
                <>
                    {data && data.user &&
                        <PopoverTrigger asChild>
                            <button className=' whitespace-nowrap  flex-center gap-4  border sohne text-md  font-bold rounded-full  bg-[#FFFFFF]'>
                                <Image className="rounded-full" src={data.user.image ?? ''} width={35} height={35} alt={data.user.name ?? ''} />
                            </button>
                        </PopoverTrigger>
                    }
                </>
                :
                <PopoverTrigger asChild>
                    <Button variant={'outline'} size={'icon'} className=' whitespace-nowrap  flex-center gap-4  border border-black sohne text-md  font-bold rounded-full  bg-[#FFFFFF]'>
                        <BiMenu />
                    </Button>
                </PopoverTrigger>
            }

            <PopoverContent ref={popoverRef}>
                <ul className="flex-center flex-col sohne font-bold gap-3  ">
                    <li className="flex flex-col gap-4">
                        <Link className="flex items-center gap-1" href={`/profile/${userFromDb?.id}`}>
                            <span className="text-sm">My Profile</span>
                        </Link>
                        <Link className="flex items-center gap-1" href="/about">
                            <span className="text-sm">Our Story</span>
                        </Link>
                        <Link className="flex items-center gap-1" href="/membership">
                            <span className="text-sm">Membership</span>
                        </Link>
                    </li>

                    {status === 'authenticated' &&
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                signOut();
                            }}
                            size={'sm'}
                            variant={'destructive'}
                            className="gap-1 sohne font-bold rounded-3xl flex-center"
                        >
                            Sign out <IoIosLogOut size={16} />
                        </Button>
                    }


                </ul>
            </PopoverContent>
        </Popover>
    )
}
