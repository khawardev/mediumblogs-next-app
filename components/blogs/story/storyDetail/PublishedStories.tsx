import StoryDetails from '../StoryDetails';

const PublishedStories = ({ publishedStories }: any) => {

    return (


        !Array.isArray(publishedStories) || publishedStories.length === 0 ? (
            <div className=" flex-center h-[420px]">
                <p className=" text-3xl opacity-25 sohne_bold"> Published is Empty </p>
            </div>
        ) : (
            <>
                {publishedStories?.map((story: any, index: number) => (
                    <StoryDetails key={index} profilepublishedEditDelete={true} story={story} />

                ))}
            </>
        )
    );
};

export default PublishedStories;
