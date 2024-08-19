'use client'
import ModalComp from "@/components/Modalcomp";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";

export function DeleteDialog({ storyId }: any) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModal = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        setIsModalOpen((prev) => !prev);
    };

    return (
        <>
            <Button
                onClick={(e) => {
                    handleModal(e)
                }}
                variant={'destructive'}
                size={'xs'}
                className="sohne font-bold transition-all ease-in rounded-full px-5 flex-center gap-1"
            >
                <Trash size={'14'} strokeWidth={2.8} /> Delete
            </Button>
            <ModalComp setIsModalOpen={setIsModalOpen} storyId={storyId} isModalOpen={isModalOpen} />
        </>
    );
}
