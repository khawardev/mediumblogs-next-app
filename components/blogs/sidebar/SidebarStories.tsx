'use client'
import { storyCheckRegix } from "@/lib/storyCheckRegix";
import Image from "next/image";
import React, { useEffect } from "react";

const SidebarStories = ({ story }: any) => {
    // const formattedContent: any = await contentFormat(story?.content, 20);
    const result: any = storyCheckRegix(story?.content);
    useEffect(() => {

    }, []);
    return (
        <div className="space-y-1 mb-4 sohne">
            <div className="flex items-center space-x-2">
                <Image
                    src={result?.imageUrl}
                    className="w-7 h-7 rounded-full"
                    alt=""
                    width={200}
                    height={200}
                />
                <div className="">
                    <h4 className="text-xl sohne_bold font-semibold">
                        <div className="markdown-body  text-xl sohne_bold font-bold line-clamp-1 " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                    </h4>
                    <div className="markdown-body sohne text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />
                </div>
            </div>
        </div>
    );
};

export default SidebarStories;