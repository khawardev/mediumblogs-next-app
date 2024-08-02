"use client"
import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { MultiSelect } from "react-multi-select-component";
import { Plus } from "lucide-react"

export default function AddTagsDialog({ allTopics }: any) {
    const [selected, setSelected] = useState([]);
    const placeholder = [{ label: 'Multiple selected ...', value: 'multiple' }];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" sohne w-full " variant={'green'} size={'iconxs'}><Plus size={'20'} /></Button>
                {/* <button className="p-2"><Plus /></button> */}
            </DialogTrigger>
            <DialogContent className=" sohne font-bold">
                <DialogHeader>
                    <DialogTitle className="sohne_bold">Add Tags</DialogTitle>
                    <DialogDescription>Select tags to add to your content.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">

                        <MultiSelect
                            options={allTopics}
                            value={selected?.length <= 3 ? selected : placeholder}
                            onChange={setSelected}
                            labelledBy="Select"
                        />
                    </div>
                    {selected?.length > 0 &&
                        <div className="flex flex-wrap gap-2">
                            {selected?.map((item: any, index: number) => (
                                <div key={index}>
                                    <p className="py-1 px-4 border  bg-gray-100 rounded-full">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <DialogFooter>
                    {selected?.length > 0 &&
                        <Button
                            variant={'green'}
                            type="submit"
                            className="font-bold"
                        >
                            Add Tags
                        </Button>
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
