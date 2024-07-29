import InputWithClearButton from "@/components/InputWithClearButton"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Storydialog"
import Image from "next/image"
interface DialogButtonProps {
    title: string;
    size?: "default" | "sm" | "lg" | "icon" | "sign";
    variant?: string;
    className?: string;

}
export function StoryShadcnDialog({ className, title }: DialogButtonProps) {
    const fallbackurl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637'
    return (
        <section >
            <Dialog >
                <DialogTrigger asChild>
                    <Button size={'sm'} className={className} variant={'outline'}  >{title}</Button>
                </DialogTrigger>

                <DialogContent className="sohne">
                    <main className="md:flex md:justify-between  gap-10 overflow-y-auto" >
                        <section className=" w-full  space-y-2" >
                            <p className=" text-xl sohne_bold">Story Preview</p>
                            <main className=" space-y-2" >
                                <Image className=" w-full" src={'https://miro.medium.com/v2/1*OS4qPxwyLNLmrLh--c7T8Q.png'} alt="" width={340} height={300} />
                                {/* <Image className=" w-full" src={fallbackurl} alt="" width={340} height={300} /> */}
                            </main>
                            <p className=" text-xl sohne_bold ">Title</p>
                            <hr />
                            <DialogDescription>description</DialogDescription>
                            <hr className=" space-y-2" />
                            <div className=" md:block hidden">
                                <DialogDescription><span className=" sohne_bold">Note:</span> Changes here will affect how your story appears in public places like Medium homepage and in subscribers inboxes not the contents of the story itself.</DialogDescription>
                            </div>
                        </section>
                        <section className=" w-full  space-y-2" >
                            <hr className=" md:hidden block" />
                            <p className=" text-base sohne font-bold ">Publishing to: <span className="sohne_bold">Khawarsultan Developer</span></p>
                            <DialogDescription>Add or change topics (up to 5) so readers know what your story is about</DialogDescription>
                            <InputWithClearButton />

                            <DialogDescription className="md:block hidden ">Learn more about what happens to your post when you publish.</DialogDescription>
                            <Button variant="green" size="sm" className="  sohne_bold" >Publish</Button>
                        </section>
                    </main>
                </DialogContent>
            </Dialog>
        </section>
    )
}
