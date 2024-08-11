'use client';
import { useState } from "react";
import StoryDetails from "@/components/blogs/story/StoryDetails";
import { Button } from "@/components/ui/button";
import { Plus, SquarePen } from "lucide-react";
import { checkFav } from "@/actions/favorite";
import PublishedStories from "../blogs/story/storyDetail/PublishedStories";
import DraftStories from "../blogs/story/storyDetail/DraftStories";
import SavedStories from "../blogs/story/storyDetail/SavedStories";

const ProfileDetails = ({ publishedStories, draftStories, savedStories }: any) => {
    const [activeTab, setActiveTab] = useState<string>("published");
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const renderStories = () => {
        switch (activeTab) {
            case "published":
                return (
                    <PublishedStories publishedStories={publishedStories} />
                )
            case "drafts":
                return (
                    <DraftStories draftStories={draftStories} />
                )
            case "saved":
                return (
                    <SavedStories savedStories={savedStories} />
                );
            default:
                return 'Not available';
        }
    };

    return (
        <div className="mobile_center_less_contract md:py-12 py-8">
            <section className="flex-between mb-9">
                <p className="md:text-5xl text-3xl sohne_bold">Your Stories</p>
                <Button className="sohne font-bold flex-center gap-2" variant={'green'} size='sm'><SquarePen size={13} /> New Story </Button>
            </section>

            <section className="flex md:gap-10 gap-6 mb-[11px] sohne">
                <section className="flex-center gap-2">
                    <button
                        onClick={() => handleTabClick("published")}
                        className={`underline-offset-[16px] decoration-2 ${activeTab === "published" ? "underline" : ""} `}
                    >
                        Published
                    </button>
                    <Button size={'iconxs'} className="font-bold text-xs">{publishedStories?.length > 0 ? publishedStories?.length : '0'}</Button>
                </section>
                <section className="flex-center gap-2">
                    <button
                        onClick={() => handleTabClick("drafts")}
                        className={`underline-offset-[16px] decoration-2 ${activeTab === "drafts" ? "underline" : ""}`}
                    >
                        Drafts
                    </button>
                    <Button size={'iconxs'} className="font-bold text-xs">{draftStories?.length > 0 ? draftStories?.length : '0'}</Button>
                </section>
                <section className="flex-center gap-2">
                    <button
                        onClick={() => handleTabClick("saved")}
                        className={`underline-offset-[16px] decoration-2 ${activeTab === "saved" ? "underline" : ""}`}
                    >
                        Saved
                    </button>
                    <Button size={'iconxs'} className="font-bold text-xs">{savedStories?.length > 0 ? savedStories?.length : '0'}</Button>
                </section>
            </section>
            <hr />
            <section>
                {renderStories()}
            </section>

        </div>
    );
};

export default ProfileDetails;
