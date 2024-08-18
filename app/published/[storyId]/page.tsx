import { getClapsCountByStory, getStoryClapCountByUser } from '@/actions/claps';
import { NumberofComments } from '@/actions/comments';
import { checkFav } from '@/actions/favorite';
import { getStorybyId } from '@/actions/story';
import { getUser, getUserbyID } from '@/actions/user';
import PublishedStory from '@/components/published/PublishedStory';

const page = async ({ params }: { params: { storyId: string } }) => {

    const publishedStory: any = await getStorybyId(params?.storyId, true);
    const noOfComments: any = await NumberofComments(publishedStory?.id);

    const favStatus: any = await checkFav(publishedStory?.id);
    const allClaps: any = await getClapsCountByStory(publishedStory?.id);
    const currentUser: any = await getUser();
    const clapsCountByUser = await getStoryClapCountByUser(publishedStory?.id);
    const storyAuther: any = await getUserbyID(publishedStory?.userId);

    return (
        <PublishedStory
            storyAuther={storyAuther}
            clapByUser={clapsCountByUser?.clapCount}
            favStatus={favStatus}
            noOfComments={noOfComments}
            allClaps={allClaps}
            currentUser={currentUser}
            publishedStory={publishedStory}
            userParams={storyAuther?.id}
        />
    )
}

export default page