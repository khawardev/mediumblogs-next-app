'use client'
import { storyCheckRegix } from "@/lib/storyCheckRegix";
import Image from "next/image";
import React, { useEffect } from "react";

const SidebarStories = ({ story }: any) => {
    const result: any = storyCheckRegix(story?.content);
    useEffect(() => {

    }, []);
    return (
        <section >
            <div className="flex items-start gap-4">
                <Image
                    src={story?.auther.image}
                    className="w-7 h-7 rounded-full"
                    alt=""
                    width={200}
                    height={200}
                />
                <div className="">
                    <div className="markdown-body  text-lg sohne_bold font-bold line-clamp-1 " dangerouslySetInnerHTML={{ __html: result?.heading || '' }} />
                    <div className="markdown-body sohne text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: result?.paragraph || '' }} />
                </div>
            </div>
        </section>
    );
};

export default SidebarStories;