import { checkFav } from "@/actions/favorite";
import StoryInDetails from "./StoryInDetails";
const StoryDetails = ({ story }: any) => {
    const FavCompp = async (storyId: any) => {
        return await checkFav(storyId);
    }
    return (
        <StoryInDetails story={story} favStatus={FavCompp(story?.id)} />
    )
}

export default StoryDetails