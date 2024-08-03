import StoryDetails from "./StoryDetails"

const GetStories = ({ stories }: any) => {
    return (
        <div>

            <div >
                {stories?.slice().reverse().map((story: any, index: number) => (
                    <StoryDetails key={index} story={story} />
                ))}
            </div>


        </div>
    )
}

export default GetStories