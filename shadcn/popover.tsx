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
            <PopoverTrigger asChild>
                <Button variant={'outline'} size={'icon'} className=' whitespace-nowrap  flex-center gap-4  border border-black sohne text-md  font-bold rounded-full  bg-[#F7F4ED]'>
                    {data && data.user && <Image className="rounded-full" src={data?.user.image ?? ''} width={40} height={40} alt={data?.user.name ?? ''} />}
                </Button>
            </PopoverTrigger>
            <PopoverContent ref={popoverRef}>
                <ul className="flex-center flex-col  sohne font-bold gap-5  ">
                    <li className="md:flex-center flex flex-col  gap-7">
                        <Link className="sohne font-bold text-sm" href="/about">Our story</Link>
                        <Link className="sohne font-bold text-sm" href="/membership">Membership</Link>
                        {/* <DialogButton   title='Write' content='Create an account to start writing.' /> */}
                        {/* <DialogButton  title='Sign in' content='Welcome back.' /> */}
                    </li>
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

                </ul>
            </PopoverContent>
        </Popover>
    )
}
