import StoryDetails from "../StoryDetails";

const SavedStories = ({ savedStories }: any) => {
    return (

        !Array.isArray(savedStories) || savedStories.length === 0 ? (
            <div className=" flex-center h-[420px]">
                <p className=" text-3xl opacity-25 sohne_bold"> Saved is Empty </p>
            </div>
        ) : (
            <>
                {savedStories?.map((story: any, index: number) => (
                    <StoryDetails key={index} story={story.story} />
                ))}
            </>
        )
    );
}

export default SavedStories