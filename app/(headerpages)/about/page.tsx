'use client'
import "@/public/assets/styles/story.css"
import { IoArrowForwardOutline } from "react-icons/io5";
import { Vollkorn } from 'next/font/google'
import { DialogButton } from "@/shadcn/Authdialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

const vollkorn = Vollkorn({
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-vollkorn",
})


const About = () => {
    const { status } = useSession()

    return (
        <main className=" ">
            <section className="bg_dots">
                <section className="mobile_center">
                    <section className="space-y-10 md:py-32 py-20  xl:w-1/2 md:w-[60%] text-white">
                        <p className={`xl:text-8xl md:text-7xl text-4xl   leading-[0.9] tracking-tight  ${vollkorn.className}`}>Everyone has a <br /> story to tell.</p>
                        <p className=" md:text-2xl text-lg">Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>
                        <p className=" md:text-2xl text-lg">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                        <p className=" text-yellow-400  md:text-2xl text-lg">Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</p>
                        <p className=" md:text-2xl text-lg">Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
                        <p className=" md:text-2xl text-lg">Instead of selling ads or selling your data, we’re supported by a growing community of Medium members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.</p>
                    </section>
                </section>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </section>
            <section className="bg-[#181817]">
                {status === 'authenticated' ?
                    <>
                        <Link href={'/blogs'}>
                            <Button className={`lg:py-24 py-14 w-full lg:px-12 px-4 lg:text-6xl text-3xl rounded-none flex-between bg-[#181817] text-primary-foreground border-t-white border border-l-0 border-r-0  hover:bg-[#1A8917]  transition-all ease-in border-b-0  ${vollkorn.className}`}>
                                Start reading
                            </Button>
                        </Link>
                        <Link href={'/blogs'}>
                            <Button className={`lg:py-24 py-14 w-full lg:px-12 px-4 lg:text-6xl text-3xl rounded-none flex-between bg-[#181817] text-primary-foreground border-t-white border border-l-0 border-r-0  hover:bg-[#1A8917]  transition-all ease-in border-b-0 ${vollkorn.className}`}>
                                Start writing
                            </Button>
                        </Link>
                        <Link href={'/blogs'}>
                            <Button className={`lg:py-24 py-14 w-full lg:px-12 px-4 lg:text-6xl text-3xl rounded-none flex-between bg-[#181817] text-primary-foreground border-t-white border border-l-0 border-r-0  hover:bg-[#1A8917]  transition-all ease-in border-b-0 ${vollkorn.className}`}>
                                Become member
                            </Button>
                        </Link>
                    </>
                    :
                    <>
                        <DialogButton title='Start reading' className={`lg:py-24 py-14 w-full lg:px-12 px-4 lg:text-6xl text-3xl rounded-none flex-between bg-[#181817] text-primary-foreground border-t-white border border-l-0 border-r-0  hover:bg-white hover:text-black transition-all ease-in border-b-0 ${vollkorn.className}`} content='Create an account to' />
                        <DialogButton title='Start writing' className={`lg:py-24 py-14 w-full lg:px-12 px-4 lg:text-6xl text-3xl rounded-none flex-between bg-[#181817] text-primary-foreground border-t-white border border-l-0 border-r-0  hover:bg-white hover:text-black transition-all ease-in border-b-0 ${vollkorn.className}`} content='Create an account to' />
                        <DialogButton title='Become member ' className={`lg:py-24 py-14 w-full lg:px-12 px-4 lg:text-6xl text-3xl rounded-none flex-between bg-[#181817] text-primary-foreground border-t-white border border-l-0 border-r-0  hover:bg-white hover:text-black transition-all ease-in border-b-0 ${vollkorn.className}`} content='Create an account to' />
                    </>
                }
            </section>
        </main>
    )
}

export default About