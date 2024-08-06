'use client'
import { getAllStories, getLimitedStories } from "@/actions/story";
import { getAllTopics, SelectedTopics } from "@/actions/topics";
import GetStories from "@/components/blogs/story/GetStories";
import Topics from "@/components/blogs/Topics";
import AddTagsDialog from "@/shadcn/tagsDialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";
import Sidebar from "@/components/blogs/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { savingTagsAtom } from "@/context/atom";
import { useAtom } from "jotai";

const Blogs = ({ searchParams }: { searchParams: { tag: string } }) => {
  const [limitedStories, setlimitedStories] = useState<any>([]);
  const [allTopics, setallTopics] = useState<any>([]);
  const [getSelectedTopics, setgetSelectedTopics] = useState<any>([]);
  const [stories, setStories] = useState<any>([]);
  const [savingTags] = useAtom(savingTagsAtom)

  useEffect(() => {
    const getData = async () => {
      setlimitedStories(await getLimitedStories(searchParams?.tag));
      setallTopics(await getAllTopics());
      setgetSelectedTopics(await SelectedTopics());
      setStories(await getAllStories(searchParams?.tag));
    };
    getData();
  }, [searchParams?.tag, savingTags]);



  return (
    <div className=" mobile_center_less_contract md:py-12 py-8 ">
      <section className=" grid md:grid-cols-7 w-full gap-20">
        <main className="md:col-span-5">
          <section className=" mb-[13px] " >
            <Topics allTopics={allTopics} userTags={getSelectedTopics} />
          </section>
          <hr />
          <section >
            <GetStories stories={stories} />
          </section>
        </main>
        <main className="col-span-2 md:block hidden">
          <Sidebar stories={limitedStories} />
        </main>
      </section>
    </div>
  );
}

export default Blogs