"use client"
import { useEffect, useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { MultiSelect } from "react-multi-select-component";
import { Plus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { CgSpinner } from "react-icons/cg";
import { addRemoveTags } from "@/actions/topics"
import { useAtom } from "jotai"
import { savingTagsAtom } from "@/context/atom"

export default function AddTagsDialog({ allTopics }: any) {
    const { toast } = useToast()
    const [selectedAllTopics, setSelectedAllTopics] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [savingTags, setsavingTags] = useAtom(savingTagsAtom)

    useEffect(() => {
        setSelectedAllTopics([])
    }, []);

    const AdduserTags = async () => {
        setsavingTags(true)
        const res = await addRemoveTags(selectedTopics);
        if (res?.error) {
            toast({ title: res.error });
        }
        setsavingTags(false)
        setSelectedAllTopics([])
        toast({
            title: 'Tags added',
        })
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="p-1 hover:border border hover:bg-gray-100 rounded-full transition-all duration-75 cursor-pointer" ><Plus size={'21'} />  </button>
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
                            value={selectedAllTopics?.length <= 5 ? selectedAllTopics : []}
                            onChange={(selected: any) => {
                                setSelectedAllTopics(selected);
                                const stringValues = selected.map((val: any) => val.value);
                                setSelectedTopics(stringValues);
                            }}
                            labelledBy="Select"
                        />
                    </div>
                    {selectedAllTopics?.length > 0 &&
                        <div className="flex flex-wrap gap-2">
                            {selectedAllTopics?.map((item: any, index: number) => (
                                <div key={index}>
                                    <p className="py-1 px-4 border  bg-gray-100 rounded-full">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <DialogFooter>
                    {selectedAllTopics?.length > 0 &&
                        <Button
                            variant={'green'}
                            type="submit"
                            className="font-bold flex-center gap-1"
                            onClick={AdduserTags}
                        >
                            {savingTags ? <>Adding Tags <CgSpinner className="animate-spin" size={20} /></> : 'Add Tags'}


                        </Button>
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
