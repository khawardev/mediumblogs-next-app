'use client';
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DialogButton } from "@/shadcn/dialog"
import Link from "next/link"
import { BiMenu } from "react-icons/bi"
import { useRef } from "react"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { PiSignOutBold } from "react-icons/pi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

interface DialogButtonProps {
    title: string;
    content: string;
    onClick?: () => void; // Add onClick as an optional prop
}
export function PopoverButton() {
    const popoverRef = useRef<HTMLDivElement>(null)
    const { data, status } = useSession()
    const handleLinkClick = () => {
        const popoverElement = popoverRef.current
        if (popoverElement) {
            const trigger = document.querySelector('[data-state="open"]') as HTMLElement
            if (trigger) {
                trigger.click() // This will close the popover
            }
        }
    }
    return (
        <Popover>
            {status !== 'authenticated' &&
                <div className=" md:hidden block">
                    <PopoverTrigger asChild>
                        <Button variant={'outline'} size={'icon'} className=' whitespace-nowrap  flex-center gap-4  border border-black sohne text-md  font-bold rounded-full  bg-[#F7F4ED]'>
                            <BiMenu />
                        </Button>
                    </PopoverTrigger>

                </div>
            }
            {data && data.user &&
                <PopoverTrigger asChild>
                    <Button variant={'outline'} size={'icon'} className=' whitespace-nowrap  flex-center gap-4  border border-black sohne text-md  font-bold rounded-full  bg-[#F7F4ED]'>
                        <Image className="rounded-full" src={data.user.image ?? ''} width={40} height={40} alt={data.user.name ?? ''} />
                    </Button>
                </PopoverTrigger>
            }
            <PopoverContent ref={popoverRef}>
                <ul className="flex-center flex-col  sohne font-bold gap-5  ">
                    <li className="md:flex-center flex flex-col  gap-2">
                        <Link className="sohne text-sm  " href="/about">
                            <Button variant={'outline'} className=" font-bold rounded-full w-full ">
                                Our story
                            </Button>
                        </Link>
                        <Link className="sohne text-sm  " href="/membership">
                            <Button variant={'outline'} className=" font-bold rounded-full w-full ">
                                Membership
                            </Button>
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
                            Sign out <IoIosLogOut stroke-width={0.8} size={16} />
                        </Button>
                    }


                </ul>
            </PopoverContent>
        </Popover>
    )
}
