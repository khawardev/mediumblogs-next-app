import ProfileDetails from "@/components/profile/ProfileDetails";
const page = ({ params }: { params: { userId: string } }) => {
    return (
        <ProfileDetails userParams={params?.userId} />
    )
}
export default page