'use client'
import { extractAndValidateContent } from '@/lib/storyCheckRegix';
import React, { useEffect, useState } from 'react'
import '@/public/assets/styles/markdown.css'
type props = {
    publishedStory: any,
    username?: string,
    userImage?: string,


};
const PublishedStory = ({ publishedStory, username, userImage }: props) => {
    const [result, setresult] = useState<any>()
    useEffect(() => {
        return () => {
            const result: any = extractAndValidateContent(publishedStory?.content);
            setresult(result)
        };
    }, []);

    return (
        <div className='  mobile_center_contract my-10  '>

            {/* <div className=" text-5xl sohne_bold " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} /> */}
            <div className="markdown-body space-y-5 " dangerouslySetInnerHTML={{ __html: publishedStory?.content }} />


        </div>
    )
}

export default PublishedStory