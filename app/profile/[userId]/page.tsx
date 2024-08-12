import { getFavStoriesByUserId } from "@/actions/favorite";
import { getStoriesByUserId } from "@/actions/story";
import ProfileDetails from "@/components/profile/ProfileDetails";

const page = ({ params }: { params: { userId: string } }) => {

    // const publishedStories = await getStoriesByUserId(params?.userId, true);
    // const draftStories = await getStoriesByUserId(params?.userId, false);
    // const savedStories = await getFavStoriesByUserId(params?.userId);



    return (
        <>
            <ProfileDetails userParams={params?.userId} />
        </>
    )
}

export default page