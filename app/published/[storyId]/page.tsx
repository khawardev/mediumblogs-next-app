import { getClapsCountByStory, getStoryClapCountByUser } from '@/actions/claps';
import { NumberofComments } from '@/actions/comments';
import { checkFav } from '@/actions/favorite';
import { getStorybyId, getUserByStoryId } from '@/actions/story';
import { getUser, getUserbyID } from '@/actions/user';
import PublishedStory from '@/components/published/PublishedStory';

const page = async ({ params }: { params: { storyId: string } }) => {

    const currentLoginUser: any = await getUser();
    // const userbyStory: any = await getUserByStoryId(params?.storyId, true);
    const publishedStory: any = await getStorybyId(params?.storyId, true);
    const noOfComments: any = await NumberofComments(publishedStory?.id);
    const favStatus: any = await checkFav(publishedStory?.id);
    const allClaps: any = await getClapsCountByStory(publishedStory?.id);
    const clapsCountByUser = await getStoryClapCountByUser(publishedStory?.id);

    return (
        <PublishedStory
            clapByUser={clapsCountByUser?.clapCount}
            favStatus={favStatus}
            noOfComments={noOfComments}
            allClaps={allClaps}
            currentLoginUser={currentLoginUser}
            publishedStory={publishedStory}
            userParams={publishedStory?.auther?.id}
        />
    )
}

export default page