import { getAllStories, getLimitedStories } from "@/actions/story";
import { getAllTopics, SelectedTopics } from "@/actions/topics";
import GetStories from "@/components/blogs/story/GetStories";
import Topics from "@/components/blogs/Topics";
import AddTagsDialog from "@/shadcn/tagsDialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";
import Sidebar from "@/components/blogs/sidebar/Sidebar";

const Blogs = async ({ searchParams }: { searchParams: { tag: string } }) => {
  const limitedStories = await getLimitedStories(searchParams?.tag);
  const allTopics = await getAllTopics();
  const getSelectedTopics = await SelectedTopics();
  console.log(searchParams?.tag, 'searchParams?.tag');
  const stories = await getAllStories(searchParams?.tag);

  console.log(stories, 'stories blogs');

  return (
    <div className=" mobile_center_less_contract md:py-12 py-8">
      <section className=" grid grid-cols-7 w-full gap-20">
        <section className=" md:col-span-5 col-span-7">
          <section className="" >
            <Topics allTopics={allTopics} userTags={getSelectedTopics} />
          </section>
          <div className="divider"><span className=" sohne_bold">Stories</span></div>
          <section >
            <GetStories stories={stories} />
          </section>
        </section>
        <section className="col-span-2 md:block hidden">
          <Sidebar stories={limitedStories} />
        </section>
      </section>
    </div>
  );
}

export default Blogs