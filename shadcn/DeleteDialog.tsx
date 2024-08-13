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
import { usePathname } from "next/navigation"
import { useState } from "react"
import { CgSpinner } from "react-icons/cg";

export function DeleteDialog({ storyId }: any) {
    const [loading, setloading] = useState<boolean>(false)

    const { toast } = useToast()
    const path = usePathname();
    const deleteStory = async ({ storyID }: any) => {
        setloading(true)
        const Delete = await deleteStoryById(storyID, path)
        if (Delete) {
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
                <Button variant={'destructive'} className="sohne h-[50px] w-full font-bold rounded-md">Delete</Button>
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
                    <AlertDialogAction onClick={() => deleteStory(storyId)} variant="destructive" className="font-bold rounded-md">
                        {loading ? <>Deleting <CgSpinner className="animate-spin " size={20} /></> : 'Delete'}

                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
