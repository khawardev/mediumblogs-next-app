import { getFavStoriesByUserId } from "@/actions/favorite";
import { getStoriesByUserId } from "@/actions/story";
import ProfileDetails from "@/components/profile/ProfileDetails";
import { Button } from "@/components/ui/button"

const page = async ({ params }: { params: { userId: string } }) => {

    const publishedStories: any = await getStoriesByUserId(params?.userId, true);
    console.log(publishedStories, 'publishedStories');

    // const savedStories = await getFavStoriesByUserId(params?.userId);
    // const draftStories = await getStoriesByUserId(params?.userId, false); // Assuming drafts are fetched separately

    return (
        <ProfileDetails publishedStories={publishedStories} />
    )
}

export default page