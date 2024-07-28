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

export function StoryTagsDialog() {
    return (
        <section >
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="green" size="sm" className=" bg-green-500 sohne_bold" >Publish</Button>
                </DialogTrigger>

                <DialogContent className="  sohne   ">
                    <main className="md:flex md:justify-between gap-10" >
                        <section className=" w-full" >
                            <DialogHeader className=" text-xl sohne_bold">Story Preview</DialogHeader>
                            <section className=" w-full  bg-gray-200 border rounded-xl flex-center text-center p-16 ">
                                Include a high-quality image in your story to make it more inviting to readers.
                            </section>
                            <DialogTitle className=" text-xl sohne_bold mt-5">Title</DialogTitle>
                            <hr className="mb-2" />
                            <DialogDescription>description</DialogDescription>
                            <hr className="mb-2" />
                            <DialogFooter><span className=" sohne_bold">Note:</span> Changes here will affect how your story appears in public places like Medium homepage and in subscribers inboxes not the contents of the story itself.</DialogFooter>
                        </section>
                        <section className=" w-full">
                            <DialogHeader className=" text-xl sohne_bold">Story Preview</DialogHeader>
                            <main className=" w-full mb-2 bg-gray-200 flex-center text-center p-16">
                                Include a high-quality image in your story to make it more inviting to readers.
                            </main>
                            <DialogTitle className=" text-xl sohne_bold ">Title</DialogTitle>
                            <hr className="mb-2" />
                            <DialogDescription>description</DialogDescription>
                            <hr className="mb-2" />
                            <DialogFooter><span className=" sohne_bold">Note:</span> Changes here will affect how your story appears in public places like Medium homepage and in subscribers inboxes not the contents of the story itself.</DialogFooter>
                        </section>

                    </main>
                </DialogContent>
            </Dialog>
        </section>
    )
}
