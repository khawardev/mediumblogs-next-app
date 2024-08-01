'use client'

import { ClapCount, ClapCountByUser, getClapsCountByStory } from '@/actions/claps';
import { getUser } from '@/actions/user';
import { checkFav } from '@/actions/favorite';
import Image from 'next/image';
import { Button } from '../ui/button';
import '@/public/assets/styles/markdown.css'
import { storyCheckRegix } from '@/lib/storyCheckRegix';
import { checkPublishedRegix } from '@/lib/checkPublishedRegix';
import ClapComp from './ClapComp'
import { useEffect, useState } from 'react';
import CommentComp from '@/components/published/comments/CommentComp';
import FavComp from './favorite/FavComp';
import ShareComp from './share/ShareComp';

type props = {
    publishedStory: any,
    username?: string,
    userImage?: string,
};

const PublishedStory = ({ publishedStory, username, userImage }: props) => {

    // const noOfComments: any = await NumberofComments(publishedStory?.id);
    // const currentUser: any = await getUser();
    // const clapCount: any = await ClapCount(publishedStory?.id);
    // const userClaps: any = await ClapCountByUser(publishedStory?.id);
    // const favStatus: any = await checkFav(publishedStory?.id);
    // const allClaps: any = await getClapsCountByStory(publishedStory?.id);

    const [clapCount, setClapCount] = useState<any>(null);
    const [userClaps, setUserClaps] = useState<any>(null);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [allClaps, setAllClaps] = useState<any>(0);
    const CheckRegix: any = storyCheckRegix(publishedStory?.content);
    const PublishedRegix: any = checkPublishedRegix(publishedStory?.content);

    useEffect(() => {
        const fetchData = async () => {
            setClapCount(await ClapCount(publishedStory?.id));
            setUserClaps(await ClapCountByUser(publishedStory?.id));
            setCurrentUser(await getUser());
            setAllClaps(await getClapsCountByStory(publishedStory?.id));
        };
        fetchData();
    }, []);

    return (
        <div className='mobile_center_contract md:my-14 my-8 text-[#242424]  '>
            <div className="  md:text-[45px] leading-[42px] text-4xl sohne_bold mb-8" dangerouslySetInnerHTML={{ __html: CheckRegix?.heading || '' }} />

            <section className='flex items-center justify-start gap-3 sohne mb-8 '>
                <Button size={'icon'} className=' whitespace-nowrap  flex-center gap-4  border sohne text-md  font-bold rounded-full  bg-[#FFFFFF]'>
                    <Image className="rounded-full" src={userImage ?? ''} width={50} height={50} alt={username ?? ''} />
                </Button>
                <div>
                    <p className='  text-gray-800 sohne_bold'>{username}</p>
                    <p className=' text-sm text-gray-500'>Published on {' '}{new Date(publishedStory?.createdAt).toDateString().split(' ')?.slice(1, 4).join(' ')}</p>
                </div>
            </section>
            <hr />
            <section className='flex-between py-4 sohne'>
                <div className='flex-center space-x-4'>
                    {!allClaps ? 'claps ...' :
                        <ClapComp allClapsCount={allClaps?.clapCount} currentUser={currentUser?.id} storyId={publishedStory?.id} />
                    }
                    <CommentComp currentUser={currentUser?.id} storyId={publishedStory?.id} username={currentUser?.name} userImage={currentUser?.image} />
                </div>
                <div className='flex-center  space-x-3'>
                    <FavComp storyId={publishedStory?.id} />

                    <ShareComp />
                </div>
            </section>
            <hr />
            <section className=' my-6'>
                <div className="markdown-body space-y-8 " dangerouslySetInnerHTML={{ __html: PublishedRegix }} />
            </section>
            {/* <div className="markdown-body space-y-5 " dangerouslySetInnerHTML={{ __html: publishedStory?.content }} /> */}
        </div>
    )
}

export default PublishedStory