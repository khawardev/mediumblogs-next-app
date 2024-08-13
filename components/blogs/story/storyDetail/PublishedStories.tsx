import { Button } from '@/components/ui/button';
import StoryDetails from '../StoryDetails';
import { DeleteDialog } from '@/shadcn/DeleteDialog';

const PublishedStories = ({ publishedStories }: any) => {

    return (


        !Array.isArray(publishedStories) || publishedStories.length === 0 ? (
            <div className=" flex-center h-[420px]">
                <p className=" text-3xl opacity-25 sohne_bold"> Published is Empty </p>
            </div>
        ) : (
            <>
                {publishedStories?.map((story: any, index: number) => (
                    <main key={index} className='w-full' >
                        <div className=" sm:hidden flex items-center gap-3 mt-4">
                            <Button variant={'outline'} className="sohne  h-[50px] w-full font-bold rounded-md">Edit</Button>
                            <DeleteDialog />
                        </div>
                        <section className='flex gap-2'>
                            <StoryDetails story={story} />
                            <div className=" sm:flex hidden  flex-col items-center gap-3 my-2">
                                <Button variant={'outline'} className="sohne  h-full w-full font-bold rounded-lg">Edit</Button>
                                <DeleteDialog storyId={story?.id} />
                            </div>
                        </section>
                    </main>

                ))}
            </>
        )
    );
};

export default PublishedStories;
