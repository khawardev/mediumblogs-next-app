import AnimateWrapper from "@/extras/AnimateWrapper"
import StoryDetails from "./StoryDetails"

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
            <div >
                {stories?.slice().reverse().map((story: any, index: number) => (
                    <StoryDetails key={index} story={story} />
                ))}
            </div>


        </div>
    )
}

export default GetStories