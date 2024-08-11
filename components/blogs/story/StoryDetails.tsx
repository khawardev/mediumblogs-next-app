import { checkFav } from "@/actions/favorite";
import StoryInDetails from "./StoryInDetails";
const StoryDetails = async ({ story }: any) => {
    // const FavCompp = async (storyId: any) => {
    //     return await checkFav(storyId);
    // }
    const favStatus = await checkFav(story?.id)
    return (
        <StoryInDetails story={story} favStatus={favStatus} />
    )
}

export default StoryDetails