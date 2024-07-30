'use client'
import { ClapCount, ClapCountByUser } from '@/actions/claps';
import { getUser } from '@/actions/user';
import { NumberofComments } from '@/actions/comments';
import { checkFav } from '@/actions/favorite';
import Image from 'next/image';
import { Button } from '../ui/button';
import '@/public/assets/styles/markdown.css'
import { storyCheckRegix } from '@/lib/storyCheckRegix';
import { checkPublishedRegix } from '@/lib/checkPublishedRegix';
import ClapCountComp from './ClapCountComp'
import { useEffect, useState } from 'react';
type props = {
    publishedStory: any,
    username?: string,
    userImage?: string,


};
const PublishedStory = ({ publishedStory, username, userImage }: props) => {


    const [clapCount, setClapCount] = useState<any>(null);
    const [userClaps, setUserClaps] = useState<any>(null);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [noOfComments, setNoOfComments] = useState<any>(null);
    const [favStatus, setFavStatus] = useState<any>(null);
    const CheckRegix: any = storyCheckRegix(publishedStory?.content);
    const PublishedRegix: any = checkPublishedRegix(publishedStory?.content);

    const fetchData = async () => {
        setClapCount(await ClapCount(publishedStory?.id));
        setUserClaps(await ClapCountByUser(publishedStory?.id));
        setCurrentUser(await getUser());
        setNoOfComments(await NumberofComments(publishedStory?.id));
        setFavStatus(await checkFav(publishedStory?.id));
    };
    fetchData();

    return (
        <div className='  mobile_center_contract md:my-14 my-8 text-[#242424]  '>
            <div className="  md:text-[45px] leading-[50px] text-4xl sohne_bold md:mb-10 mb-8" dangerouslySetInnerHTML={{ __html: CheckRegix?.heading || '' }} />

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
                    <ClapCountComp clapCount={clapCount} storyId={publishedStory?.id} userClaps={userClaps} />
                </div>
                <div className='flex-center  space-x-3'>
                    {/* <p >Claps</p> */}
                    {/* <p>comments</p> */}
                    {/* <p >Claps</p> */}
                    <p>comments</p>
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