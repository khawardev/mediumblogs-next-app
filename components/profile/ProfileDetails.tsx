'use client';

import { useState } from "react";
import StoryDetails from "@/components/blogs/story/StoryDetails";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const ProfileDetails = ({ publishedStories, draftStories, savedStories }: any) => {

    const [activeTab, setActiveTab] = useState<string>("published");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const renderStories = () => {
        switch (activeTab) {
            case "published":
                return (
                    !Array.isArray(publishedStories) || publishedStories.length === 0 ? (
                        <div className=" flex-center h-[420px]">
                            <p className=" text-3xl opacity-25 sohne_bold"> Published is Empty </p>
                        </div>
                    ) : (
                        <>
                            {publishedStories.map((story: any, index: number) => (
                                <StoryDetails key={index} story={story} />
                            ))}
                        </>
                    )
                );
            case "drafts":
                return (
                    !Array.isArray(draftStories) || draftStories.length === 0 ? (
                        <div className=" flex-center h-[420px]">
                            <p className=" text-3xl opacity-25 sohne_bold"> Draft is Empty </p>
                        </div>
                    ) : (
                        <>
                            {draftStories.map((story: any, index: number) => (
                                <StoryDetails key={index} story={story} />
                            ))}
                        </>
                    )
                );
            case "saved":
                return (
                    !Array.isArray(savedStories) || savedStories.length === 0 ? (
                        <div className=" flex-center h-[420px]">
                            <p className=" text-3xl opacity-25 sohne_bold"> Saved is Empty </p>
                        </div>
                    ) : (
                        <>
                            {savedStories.map((story: any, index: number) => (
                                <StoryDetails auther={story.auther} key={index} story={story.story} />
                            ))}
                        </>
                    )
                );
            default:
                return 'Not available';
        }
    };

    return (
        <div className="mobile_center_less_contract md:py-12 py-8">
            <section className="flex-between mb-9">
                <p className="md:text-5xl text-3xl sohne_bold">Your Stories</p>
                <Button className="sohne font-bold flex-center gap-2" variant={'green'} size='sm'>New Story <Plus size={'15'} /></Button>
            </section>

            <section className="flex md:gap-10 gap-6 mb-[11px] sohne">
                <section className="flex-center gap-2">
                    <button
                        onClick={() => handleTabClick("published")}
                        className={`underline-offset-[16px] decoration-2 ${activeTab === "published" ? "underline" : ""}`}
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
