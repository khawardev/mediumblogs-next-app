'use client'
import { deleteStoryById } from "@/actions/story"
import {
    AlertDialogAction,
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Trash, Trash2 } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { CgSpinner } from "react-icons/cg";
import { RiDeleteBin7Line } from "react-icons/ri";

export function DeleteDialog({ storyId }: any) {
    const [loading, setloading] = useState<boolean>(false)

    const { toast } = useToast()
    const path = usePathname();
    const deleteStory = async (storyID: any) => {
        setloading(true)
        const Delete = await deleteStoryById(storyID, path)
        if (Delete === "DELETE") {
            setloading(false)
            toast({
                description: 'Story is deleted successfully',
            });
        } else {
            setloading(false)
            toast({
                description: 'Error deleting story',
            });
        }

    }


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }} variant={'destructive'} size={'xs'} className="sohne font-bold transition-all ease-in rounded-full  px-5 flex-center gap-1 "><Trash size={'14'} strokeWidth={2.8} />Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className=" sohne">
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete this Story?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="font-bold rounded-md ">Cancel</AlertDialogCancel>
                    <Button variant={'destructive'} onClick={() => deleteStory(storyId)} className="flex-center gap-1 font-bold rounded-md ">
                        {loading ? <> Deleting <CgSpinner className="animate-spin " size={16} /></> : 'Delete'}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
