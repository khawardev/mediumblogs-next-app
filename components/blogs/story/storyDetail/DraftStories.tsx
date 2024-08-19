import StoryDetails from '../StoryDetails';
const DraftStories = ({ draftStories }: any) => {
    return (
        !Array.isArray(draftStories) || draftStories.length === 0 ? (
            <div className=" flex-center h-[420px]">
                <p className=" text-3xl opacity-25 sohne_bold"> Draft is Empty </p>
            </div>
        ) : (
            <>
                {draftStories?.map((story: any, index: number) => (
                    <StoryDetails profileDraftLink={'draft'} key={index} profilepublishedEditDelete={true} story={story} />
                ))}
            </>
        )
    );
}

export default DraftStories