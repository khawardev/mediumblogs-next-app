"use client"
import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"

export default function AddTagsDialog() {
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const handleTagChange = (tag: string) => {
        setSelectedTags((prevTags) => {
            const updatedTags = [...prevTags, tag]; // Add incoming tag to the array
            return updatedTags;
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" sohne" variant="outline">Add Tags</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] sohne font-bold">
                <DialogHeader>
                    <DialogTitle>Add Tags</DialogTitle>
                    <DialogDescription>Select tags to add to your content.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="tags" className="text-base sohne font-bold">
                            Tags
                        </Label>
                        <div id="tags">
                            <Select value={selectedTags.join(', ')} onValueChange={handleTagChange} >
                                <SelectTrigger className="w-full sohne font-bold">
                                    <SelectValue placeholder="Select tags" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="sohne font-bold">
                                        <SelectItem value="tag1">Tag 1</SelectItem>
                                        <SelectItem value="tag2">Tag 2</SelectItem>
                                        <SelectItem value="tag3">Tag 3</SelectItem>
                                        <SelectItem value="tag4">Tag 4</SelectItem>
                                        <SelectItem value="tag5">Tag 5</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label className="text-base sohne font-bold">Selected Tags</Label>
                        <div className="flex flex-wrap gap-2">
                            {selectedTags.map((tag, index) => (
                                <div key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded-md">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        onClick={() => {
                            console.log("Added tags:", selectedTags)
                        }}
                    >
                        Add Tags
                    </Button>
                    <div>
                        <Button variant="outline">Cancel</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
