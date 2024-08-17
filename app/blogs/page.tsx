import { getAllStories, getLimitedStories } from "@/actions/story";
import { getAllTopics, SelectedTopics } from "@/actions/topics";
import GetStories from "@/components/blogs/story/GetStories";
import Topics from "@/components/blogs/Topics";
import Sidebar from "@/components/blogs/sidebar/Sidebar";
import { savingTagsAtom } from "@/context/atom";
import { useAtom } from "jotai";
import AddTagsDialog from "@/shadcn/tagsDialog";
import Image from "next/image";
import { useSwrStories } from "@/hooks/getSwrStories";
import TopicsSkeleton from "@/components/skeletons/TopicsSkeleton";
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton";
import { checkFav } from "@/actions/favorite";

const Blogs = async ({ searchParams }: { searchParams: { tag: string } }) => {
  const getSelectedTopics = await SelectedTopics();
  const fetchedStories = await getAllStories(searchParams?.tag);
  const limitedStories = await getLimitedStories(searchParams?.tag);
  const allTopics = await getAllTopics();
  const stories = Array?.isArray(fetchedStories) ? fetchedStories.sort((a: any, b: any) => new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()) : [];

  return (
    <div className=" mobile_center_less_contract md:py-12 py-8 ">
      <section className=" grid md:grid-cols-7 w-full gap-20">
        <main className="md:col-span-5">
          <section className=" mb-[13px] ">
            {getSelectedTopics?.length > 0 ?
              <Topics allTopics={allTopics} userTags={getSelectedTopics} />
              :
              <TopicsSkeleton />
            }
          </section>
          <hr />
          <section >
            <GetStories stories={stories} />
          </section>
        </main>
        <main className="col-span-2 md:block hidden">
          <Sidebar limitedStories={limitedStories} />
          {/* {limitedStories.length > 0 ?
            :
            <SidebarSkeleton />
          } */}
        </main>
      </section>
    </div>
  );
}

export default Blogs