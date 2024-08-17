import { getFavStoriesByUserId } from "@/actions/favorite";
import { getStoriesByUserId } from "@/actions/story";
import ProfileDetails from "@/components/profile/ProfileDetails";

const page = ({ params }: { params: { userId: string } }) => {


    return (
        <ProfileDetails userParams={params?.userId} />
    )
}

export default page