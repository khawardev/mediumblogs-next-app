import { Button } from "@/components/ui/button"
import { IoArrowForwardOutline } from "react-icons/io5";

const about = () => {
    return (
        <main className=" ">
            <section className="bg_dots">
                <section className="mobile_center">
                    <section className="space-y-10 md:py-32 py-20  xl:w-1/2 lg:w-[60%] text-white">
                        <p className="xl:text-8xl lg:text-7xl text-5xl   leading-[0.9] tracking-tight">Everyone has a <br /> story to tell.</p>
                        <p className=" lg:text-2xl text-xl">Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>
                        <p className=" lg:text-2xl text-xl">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                        <p className=" text-yellow-400 sohne_bold lg:text-3xl text-2xl -z-10 highlight highlight-yellow-400 highlight-spread-x-sm highlight-variant-1">Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</p>
                        <p className=" lg:text-2xl text-xl">Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
                        <p className=" lg:text-2xl text-xl">Instead of selling ads or selling your data, we’re supported by a growing community of Medium members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.</p>
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
            <section className=" bg-[#181817]  ">
                <Button variant={'white'} className="about_button border-t-white border border-l-0 border-r-0    ">Start reading <IoArrowForwardOutline /> </Button>
                <Button variant={'white'} className="about_button">Start writing <IoArrowForwardOutline /> </Button>
                <Button variant={'white'} className="about_button   border-b-0 ">Become member <IoArrowForwardOutline /></Button>
            </section>
        </main>
    )
}

export default about