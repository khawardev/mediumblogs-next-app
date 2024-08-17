'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { CgSpinner } from "react-icons/cg";
import { useToast } from "./ui/use-toast";
import { usePathname } from "next/navigation";
import { deleteStoryById } from "@/actions/story";
import { mutate } from "swr";
import { getUser } from "@/actions/user";

const ModalComp = ({ isModalOpen, storyId, setIsModalOpen }: any) => {
    const [loading, setloading] = useState<boolean>(false)
    const { toast } = useToast();
    const path = usePathname();

    const deleteStory = async (e: any, storyID: any) => {
        e.stopPropagation();
        e.preventDefault();
        setloading(true)
        const userfromDb: any = await getUser();
        const Delete = await deleteStoryById(storyID, path)
        await mutate(userfromDb?.id, false);
        await mutate(userfromDb?.id, true);
        if (Delete === "DELETE") {
            setloading(false)
            toast({
                description: 'Story is deleted successfully',
            });
            setIsModalOpen(false);
        } else {
            setloading(false)
            toast({
                description: 'Error deleting story',
            });
            setIsModalOpen(false);
        }
    }
    return (
        <>
            {isModalOpen && (
                <>

                    <div className={`fixed sohne  z-50 inset-0 bg-[#FFFFFF]/90 `} >
                        <div className="flex items-center justify-center h-2/3 ">
                            <div className="bg-[#FFFFFF]  left-[50%] top-[60%] z-50 p-6 rounded-lg border border-black  shadow-lg sm:w-1/3 w-11/12 transition-opacity ease-in-out duration-1000">
                                <h2 className="text-xl  sohne_bold font-bold">Confirm Delete</h2>
                                <h2 className="md:text-base md:font-normal font-bold text-sm mb-8 text-muted-foreground sohne ">Are you sure you want to delete this Story?</h2>
                                <div className="flex justify-end gap-2 items-center">
                                    <Button
                                        variant="outline"
                                        className="font-bold rounded-full"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            setIsModalOpen(false);
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant={'destructive'} className="flex-center gap-1 font-bold rounded-full " onClick={(e) => deleteStory(e, storyId)}>
                                        {loading ? <> Deleting <CgSpinner className="animate-spin " size={16} /></> : 'Delete'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )}

        </>
    )
}
export default ModalComp; 