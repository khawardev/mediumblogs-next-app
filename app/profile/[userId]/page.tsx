import { getFavStoriesByUserId } from "@/actions/favorite";
import { getStoriesByUserId } from "@/actions/story";
import ProfileDetails from "@/components/profile/ProfileDetails";

const page = async ({ params }: { params: { userId: string } }) => {

    const publishedStories = await getStoriesByUserId(params?.userId, true);
    if (!publishedStories) {
        return (
            <>No story found</>
        )
    }
    const draftStories = await getStoriesByUserId(params?.userId, false);
    const savedStories = await getFavStoriesByUserId(params?.userId);

    // const fetchPublishedStories = async (userId: any) => {
    //     try {
    //         const publishedStories = await getStoriesByUserId(userId, true);
    //         return publishedStories;
    //     } catch (error) {
    //         console.error('Error fetching published stories:', error);
    //         return null;
    //     }
    // };



    return (
        <>
            <ProfileDetails publishedStories={publishedStories} draftStories={draftStories} savedStories={savedStories} />
        </>
    )
}

export default page