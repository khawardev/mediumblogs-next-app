import AnimateWrapper from "@/extras/AnimateWrapper"
import StoryDetails from "./StoryDetails"
import StoryDetailSkeleton from "@/components/skeletons/StoryDetailSkeleton"
import { checkFav } from "@/actions/favorite"

const GetStories = ({ stories }: any) => {

    const handleFav = async (storyId: string) => {
        const favStatus = await checkFav(storyId);
        return favStatus;
    };
    return (
        <div>
            {/* {stories?.slice().reverse().map((story: any, index: number) => (
                <div key={index}>
                    <AnimateWrapper transition={{ duration: 0.6, delay: story.id * .12 }} >
                        <StoryDetails story={story} />
                    </AnimateWrapper>
                </div>
            ))} */}
            <div>

                {stories.length > 0 ?
                    stories?.map((story: any, index: number) => (
                        <div key={index}>
                            <StoryDetails favStatus={handleFav(story?.id)} story={story} />
                        </div>
                    )) :
                    <>
                        <StoryDetailSkeleton />
                        <StoryDetailSkeleton />
                        <StoryDetailSkeleton />
                        <StoryDetailSkeleton />
                        <StoryDetailSkeleton />
                    </>
                }









            </div>


        </div>
    )
}

export default GetStories