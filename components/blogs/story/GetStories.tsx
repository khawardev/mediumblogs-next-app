import AnimateWrapper from "@/extras/AnimateWrapper"
import StoryDetails from "./StoryDetails"
import StoryDetailSkeleton from "@/components/skeletons/StoryDetailSkeleton"

const GetStories = ({ stories }: any) => {
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
                        <StoryDetails key={index} story={story} />
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