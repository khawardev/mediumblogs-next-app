import { checkFav } from "@/actions/favorite";
import StoryInDetails from "./StoryInDetails";

const StoryDetails = async ({ story, auther }: any) => {
    const favStatus: any = await checkFav(story?.id);
    return (
        <StoryInDetails story={story} auther={auther} favStatus={favStatus} />
    )
}

export default StoryDetails