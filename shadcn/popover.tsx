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
import { CgProfile } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";

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
                <ul className="flex-center flex-col  sohne font-bold gap-5  ">
                    <li className="md:flex-center flex flex-col  gap-2">
                        <Link className="sohne text-sm  " href={`/profile/${userFromDb?.id}`}>
                            <button className="flex-center gap-1 py-1 text-sm w-full ">
                                <CgProfile />My Profile
                            </button>
                        </Link>
                        <Link className="sohne text-sm  " href="/about">
                            <button className="flex-center gap-1 py-1 text-sm w-full ">
                                <MdOutlineArticle /> Our story
                            </button>
                        </Link>
                        <Link className="sohne text-sm  " href="/membership">
                            <button className="flex-center gap-1 py-1 text-sm w-full ">
                                <RiPriceTag3Line /> Membership
                            </button>
                        </Link>
                    </li>
                    {status === 'authenticated' &&
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                signOut();
                            }}
                            variant={'destructive'}
                            className="gap-1 sohne font-bold rounded-full flex-center"
                        >
                            Sign out <IoIosLogOut size={16} />
                        </Button>
                    }


                </ul>
            </PopoverContent>
        </Popover>
    )
}
