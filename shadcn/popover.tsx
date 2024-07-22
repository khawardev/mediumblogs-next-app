import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DialogButton } from "@/shadcn/dialog"
import Link from "next/link"
import { BiMenu } from "react-icons/bi"
export function PopoverButton() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={'outline'} size={'icon'} className=' whitespace-nowrap  flex-center gap-4  border border-black sohne text-md  font-bold rounded-full  bg-[#F7F4ED]'>
                    <BiMenu />
                </Button>
            </PopoverTrigger>
            <PopoverContent >
                <ul className="flex-center flex-col  sohne font-bold gap-5  ">
                    <li className="md:flex-center flex flex-col  gap-7">
                        <Link className="sohne font-bold text-sm" href="/about">Our story</Link>
                        <Link className="sohne font-bold text-sm" href="/membership">Membership</Link>
                        <DialogButton title='Write' content='Create an account to start writing.' />
                        <DialogButton title='Sign in' content='Welcome back.' />
                    </li>
                    <Button size={'sm'} className="sohne font-bold rounded-full ">
                        Get started
                    </Button>
                </ul>
            </PopoverContent>
        </Popover>
    )
}
