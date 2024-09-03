'use client'
import '@/public/assets/styles/markdown.css'
import Image from 'next/image';
import { storyCheckRegix } from '@/lib/storyCheckRegix';
import { checkPublishedRegix } from '@/lib/checkPublishedRegix';
import ClapComp from './ClapComp'
import CommentComp from '@/components/published/comments/CommentComp';
import FavComp from './favorite/FavComp';
import ShareComp from './share/ShareComp';
import { usePathname } from 'next/navigation';
import StoryTags from '../blogs/story/StoryTags';
import { useProfileData } from '@/hooks/getProfileData';
import StoryDetails from '../blogs/story/StoryDetails';
import { useEffect } from 'react';


const PublishedStory = ({ clapByUser, publishedStory, favStatus, noOfComments, currentLoginUser, allClaps, userParams }: any) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [publishedStory]);

    const pathname = usePathname();
    const GetElemntRegix: any = storyCheckRegix(publishedStory?.content);
    const publishedRegix: any = checkPublishedRegix(publishedStory?.content);
    const { publishSortedStories } = useProfileData({ userParams });
    const filteredPublishedStories = publishSortedStories.filter((story: any) => story.id !== publishedStory.id);

    const userName = publishedStory?.auther?.name.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());;
    const currentLoginUserName = currentLoginUser?.name.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());


    return (
        <div className='mobile_center_contract flex flex-col md:my-14 mt-8 text-[#242424]  '>
            <div className="  md:text-[45px] leading-[42px] text-4xl sohne_bold mb-8" dangerouslySetInnerHTML={{ __html: GetElemntRegix?.heading || '' }} />
            <section className='flex items-center justify-start gap-3 sohne mb-8 '>
                <Image className="rounded-full" src={publishedStory?.auther?.image} width={40} height={40} alt={userName} />
                <div>
                    <p className='  text-gray-800 sohne_bold'>{userName}</p>
                    <p className=' text-sm text-gray-500 sohne font-bold'>Published on {' '}{new Date(publishedStory?.createdAt).toDateString().split(' ')?.slice(1, 4).join(' ')}</p>
                </div>
            </section>
            <hr />
            <section className='flex-between py-4 sohne'>
                <div className='flex-center space-x-4 '>
                    <ClapComp clapByUser={clapByUser} allClapsCount={allClaps?.clapCount} currentLoginUser={currentLoginUser?.id} storyId={publishedStory?.id} />
                    <CommentComp noOfComments={noOfComments} currentLoginUser={currentLoginUser?.id} storyId={publishedStory?.id} username={currentLoginUserName} userImage={currentLoginUser?.image} />
                </div>
                <div className='flex-center  space-x-3'>
                    <FavComp favStatus={favStatus} storyId={publishedStory?.id} />
                    <ShareComp pathname={pathname} />
                </div>
            </section>
            <hr />
            <section className='my-6'>
                <div className="markdown-body space-y-8   " dangerouslySetInnerHTML={{ __html: publishedRegix }} />
            </section>

            <section className='my-7'>
                <StoryTags story={publishedStory} limit={5} />
            </section>
            <section className='flex-between py-8 sohne'>
                <div className='flex-center space-x-4 '>
                    <ClapComp clapByUser={clapByUser} allClapsCount={allClaps?.clapCount} currentLoginUser={currentLoginUser?.id} storyId={publishedStory?.id} />
                    <CommentComp noOfComments={noOfComments} currentLoginUser={currentLoginUser?.id} storyId={publishedStory?.id} username={currentLoginUserName} userImage={currentLoginUser?.image} />
                </div>
                <div className='flex-center  space-x-3'>
                    <FavComp favStatus={favStatus} storyId={publishedStory?.id} />
                    <ShareComp pathname={pathname} />
                </div>
            </section>

            {/* <section className='md:flex flex-center flex-col   items-center md:justify-between gap-3 sohne py-8 border-b '>
                <Image className="rounded-full" src={publishedStory?.auther?.image ?? ''} width={60} height={60} alt={publishedStory?.auther?.name ?? ''} />
                <div>
                    <p className='  text-gray-800 text-xl sohne_bold'>Written By {publishedStory?.auther?.name}</p>
                </div>
            </section> */}
            {filteredPublishedStories.length > 0 &&
                <>
                    <hr />
                    <section className='   py-8 '>
                        <section className=' flex-between'>
                            <p className=' text-xl sohne_bold'>More from {userName}</p>
                            {/* <Image className="rounded-full" src={publishedStory?.auther?.image ?? ''} width={40} height={40} alt={publishedStory?.auther?.name ?? ''} /> */}
                        </section>
                        <section className='grid md:grid-cols-2 gap-5 sohne  py-8'>
                            {Array.isArray(filteredPublishedStories) && filteredPublishedStories.map((story: any, index: number) => (
                                <StoryDetails moreFromCreator={true} key={index} story={story} />
                            ))}
                        </section>
                    </section>
                </>
            }
        </div>
    )
}

export default PublishedStory