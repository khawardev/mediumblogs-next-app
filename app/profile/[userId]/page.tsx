import { getStoriesByUserId } from "@/actions/story";
import ProfileDetails from "@/components/profile/ProfileDetails";
import { Button } from "@/components/ui/button"

const page = async ({ params }: { params: { userId: string } }) => {
    const publishedStories: any = await getStoriesByUserId(params?.userId, true);
    const draftStories: any = await getStoriesByUserId(params?.userId, false); // Assuming drafts are fetched separately
    const savedStories: any = await getStoriesByUserId(params?.userId, false);
    console.log(publishedStories, 'publishedStories');

    return (
        <ProfileDetails savedStories={savedStories} publishedStories={publishedStories} draftStories={draftStories} />
    )
}

export default page