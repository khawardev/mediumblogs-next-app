'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import PublishedStories from "../blogs/story/storyDetail/PublishedStories";
import DraftStories from "../blogs/story/storyDetail/DraftStories";
import StoryDetailSkeleton from "../skeletons/StoryDetailSkeleton";
import { Skeleton } from "../ui/skeleton";
import { useProfileData } from "@/hooks/getProfileData";
import SavedStories from "../blogs/story/storyDetail/SavedStories";
import { CreateStory } from "@/actions/story";
import { useToast } from "../ui/use-toast";
import { DeleteDialog } from "@/shadcn/DeleteDialog";

type Blogsprops = {
    draftStories?: any,
    publishedStories: any,
    savedStories?: any,
}

const ProfileDetails = ({ userParams }: any) => {
    const { toast } = useToast()
    const [activeTab, setActiveTab] = useState<string>("published");
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
    const { publishedStories, draftStories, savedStories } = useProfileData({ userParams });
    const publishSortedStories = Array?.isArray(publishedStories) ? publishedStories.sort((a: any, b: any) => new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()) : [];
    const draftSortedStories = Array?.isArray(draftStories) ? draftStories.sort((a: any, b: any) => new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()) : [];
    const favSortedStories = Array?.isArray(savedStories) ? savedStories.sort((a: any, b: any) => new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()) : [];
    console.log(publishedStories, 'publishedStories');
    console.log(draftStories, 'draftStories');

    const renderStories = () => {
        switch (activeTab) {
            case "published":
                return (
                    <PublishedStories publishedStories={publishSortedStories} />
                )
            case "drafts":
                return (
                    <DraftStories draftStories={draftSortedStories} />
                )
            case "saved":
                return (
                    <SavedStories savedStories={favSortedStories} />
                );
            default:
                return 'Not available';
        }
    };
    const MakeNewStory = async () => {
        const res = await CreateStory();
        if (res?.error) {
            toast({
                title: res?.error,
            })
        }
    }
    return (

        <div className="mobile_center_less_contract md:py-12 py-8">
            <section className="flex-between mb-14">
                <p className="md:text-5xl text-3xl sohne_bold">Your Stories</p>

                <button onClick={MakeNewStory} className="flex-center gap-2   text-gray-500 ">
                    <SquarePen strokeWidth={1.25} size={18} />
                    <p className="  md:font-normal font-bold  sohne ">Write</p>
                </button>
            </section>

            <section className="flex md:gap-10 gap-6 mb-[11px] sohne">
                <section className="flex-center gap-2">
                    <button
                        onClick={() => handleTabClick("published")}
                        className={`underline-offset-[16px] decoration-2 ${activeTab === "published" ? "underline" : ""} `}
                    >
                        Published
                    </button>
                    <Button size={'iconxs'} className="font-bold text-xs">
                        {Array.isArray(publishedStories) ? publishedStories.length : '--'}
                    </Button>
                </section>
                <section className="flex-center gap-2">
                    <button
                        onClick={() => handleTabClick("drafts")}
                        className={`underline-offset-[16px] decoration-2 ${activeTab === "drafts" ? "underline" : ""}`}
                    >
                        Drafts
                    </button>
                    <Button size={'iconxs'} className="font-bold text-xs">
                        {Array.isArray(draftStories) ? draftStories.length : '--'}
                    </Button>
                </section>
                <section className="flex-center gap-2">
                    <button
                        onClick={() => handleTabClick("saved")}
                        className={`underline-offset-[16px] decoration-2 ${activeTab === "saved" ? "underline" : ""}`}
                    >
                        Saved
                    </button>
                    <Button size={'iconxs'} className="font-bold text-xs">
                        {Array.isArray(savedStories) ? savedStories.length : '--'}
                    </Button>
                </section>
            </section>
            <hr />
            <section>
                {!publishedStories ? (
                    <div>
                        <StoryDetailSkeleton />
                        <StoryDetailSkeleton />
                        <StoryDetailSkeleton />
                    </div>
                ) : (
                    renderStories()
                )}


            </section>


        </div>
    );
};

export default ProfileDetails;
