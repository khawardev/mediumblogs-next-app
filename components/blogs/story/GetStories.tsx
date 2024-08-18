import StoryDetails from "./StoryDetails"
const GetStories = async ({ stories }: any) => {
    return (
        <div>
            {stories?.map((story: any, index: number) => (
                <div key={index}>
                    <StoryDetails story={story} />
                </div>
            ))}
        </div>
    )
}

export default GetStories