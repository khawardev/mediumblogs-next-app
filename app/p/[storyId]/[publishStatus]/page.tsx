import { getStorybyId, getUserByStoryId } from '@/actions/story';
import { getUser } from '@/actions/user';
import NavbarStory from '@/components/story/NavbarStory'
import AddNewStory from '@/components/story/AddNewStory';
import HtmlToMarkdown from '@/lib/HtmlToMarkdown';


const StoryID = async ({ params }: { params: { storyId: string, publishStatus: any } }) => {
    const story: any = await getStorybyId(params?.storyId, params?.publishStatus);
    const user: any = await getUser();

    let htmlToMarkdownContent;
    if (story?.content) {
        htmlToMarkdownContent = await HtmlToMarkdown(story.content);
    }

    return (
        <div className="sm:w-6/12 m-auto">
            <div className='sm:px-0 px-4'>
                <NavbarStory publishStatus={params?.publishStatus} storyContent={story?.content || ''} storyID={params?.storyId} currentUserName={user?.name || ''} />
            </div>
            <AddNewStory publishStatus={params?.publishStatus} HtmlToMarkdown={htmlToMarkdownContent || ''} storyID={params?.storyId} />
        </div>

    )
}

export default StoryID