import { getFavStoriesByUserId } from "@/actions/favorite";
import { getStoriesByUserId } from "@/actions/story";
import ProfileDetails from "@/components/profile/ProfileDetails";

const page = async ({ params }: { params: { userId: string } }) => {

    const draftStories = await getStoriesByUserId(params?.userId, false);
    const publishedStories = await getStoriesByUserId(params?.userId, true);
    const savedStories = await getFavStoriesByUserId(params?.userId);

    return (
        <>
            <ProfileDetails publishedStories={publishedStories} draftStories={draftStories} savedStories={savedStories} />
        </>
    )
}

export default page