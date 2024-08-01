import { getAllStories } from "@/actions/story";
import { SelectedTopics } from "@/actions/topics";
import GetStories from "@/components/blogs/GetStories";
import Topics from "@/components/blogs/Topics";

const Blogs = async ({ searchParams }: { searchParams: { tag: string } }) => {

  // const allTopics = await getUniqueTopics();
  const getSelectedTopics = await SelectedTopics();
  const stories = await getAllStories(searchParams?.tag);
  // const limitedStories = await getLimitedStories(searchParams?.tag);
  console.log(getSelectedTopics, "stories");
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-20 justify-between">
        <div className="py-8">
          asdasd
          <Topics userTags={getSelectedTopics} />
          {/* <GetStories stories={stories} /> */}
        </div>
        {/* <Sidebar stories={limitedStories} /> */}
      </div>
    </div>
  );
}

export default Blogs