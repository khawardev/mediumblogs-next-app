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
} from "@/components/ui/dialog"
import Link from "next/link"
import Mediumicon from '@/public/medium-icon.svg'
import Image from "next/image"
import { signIn } from "next-auth/react"

export function DialogButton({ title, content }: { title: string, content: string }) {

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Link className="sohne font-bold text-sm" href="">{title}</Link>
            </DialogTrigger>
            <DialogContent className=" flex-center text-center flex-col  ">
               
                <Image
                    src={Mediumicon}
                    alt="medium svg"
                    width={50}
                    height={50}
                />

                <DialogHeader className=" text-xl  sohne_bold">Login to continue</DialogHeader>
                <DialogDescription className="flex-center text-center sohne ">
                    Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.
                </DialogDescription>

                <DialogTitle className=" text-3xl ">{content}</DialogTitle>
                <Button onClick={() => signIn("google")} variant={'outline'} className=' whitespace-nowrap  flex-center gap-4  border border-black sohne text-md  font-bold rounded-full  bg-[#F7F4ED]'>
                    <Image
                        src={`https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png`}
                        alt="medium svg"
                        width={20}
                        height={20}
                    />
                    Sign in with google
                </Button>
                <DialogDescription className="flex-center text-center sohne ">
                    Click Sign in to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
