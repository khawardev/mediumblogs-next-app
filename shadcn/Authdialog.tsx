'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Authdialog"
import Link from "next/link"
import Mediumicon from '@/public/medium-icon.svg'
import Image from "next/image"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
interface DialogButtonProps {
    title: string;
    content: string;
    size?: "default" | "sm" | "lg" | "icon" | "sign";
    variant?: string;
    className?: string;

}
export function DialogButton({ size, className, title, content }: DialogButtonProps) {

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button size={size} className={className}>
                    {title !== 'Sign in' ? title : <><FcGoogle />{title}</>}
                </Button>
            </DialogTrigger>
            <DialogContent className=" flex-center text-center flex-col  ">

                <Image
                    src={Mediumicon}
                    alt="medium svg"
                    width={50}
                    height={50}
                />

                <DialogHeader className=" text-xl  sohne_bold ">Login to continue</DialogHeader>
                <DialogDescription className="flex-center text-center sohne ">
                    Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.
                </DialogDescription>
                {/* , {callbackUrl: 'http://localhost:3000' || 'https://mediumblogs.vercel.app' } */}
                <DialogTitle className=" text-3xl  ">{content}</DialogTitle>
                <Button onClick={(e) => {
                    e.preventDefault();
                    signIn('google')
                }} variant={'outline'} className=' whitespace-nowrap  flex-center gap-4  border border-black sohne text-md  font-bold rounded-full  bg-[#FFFFFF]'>
                    <FcGoogle size={20} />
                    Sign in with google
                </Button>
                <DialogDescription className="flex-center text-center sohne ">
                    Click Sign in to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
