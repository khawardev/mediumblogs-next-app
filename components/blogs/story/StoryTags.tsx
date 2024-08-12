'use client'
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const StoryTags = ({ story, limit }: any) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [currentTag, setCurrentTag] = useState("");

    const handleClick = (e: any, tag: any) => {
        e.preventDefault();
        e.stopPropagation();
        const newUrl = currentTag === tag ? "/blogs" : `/blogs/?tag=${tag}`;
        setCurrentTag(currentTag === tag ? "" : tag);
        router.push(newUrl);
    };

    useEffect(() => {
        const tagParam = searchParams.get("tag");
        setCurrentTag(tagParam || "");
    }, [pathname, searchParams]);

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 flex-wrap text-sm">
                {story?.topics?.slice(0, limit).map((tag: any, index: any) => (
                    <Link
                        key={index}
                        href={`/blogs/?tag=${tag}`}
                        onClick={(e) => handleClick(e, tag)}
                        className={`${currentTag === tag
                            ? 'bg-black text-white'
                            : 'border-black/10 border bg-[#e7e7e7ab] opacity-60'
                            } sohne font-bold transition-all ease-in rounded-full py-1 px-4`}
                    >
                        {tag}
                    </Link>
                ))}
                {story?.topics?.length > limit && (
                    <p className="py-1 px-4 border text-sm sohne font-bold bg-[#e7e7e7] border-black/10 rounded-full opacity-60">
                        +{story?.topics?.length - limit}
                    </p>
                )}
            </div>
        </div>
    );
};

export default StoryTags;
