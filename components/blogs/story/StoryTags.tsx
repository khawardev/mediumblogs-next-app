import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const StoryTags = ({ story, limit }: any) => {
    const router = useRouter();
    const [currentTag, setCurrentTag] = useState('');
    const handleClick = (e: any, tag: any) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentTag(prevTag => (prevTag === tag ? '' : tag));
        const href = currentTag === tag ? '/blogs' : `/blogs/?tag=${tag}`;
        router.push(href);
    };

    return (
        <div className="flex-center gap-2">
            <div className="flex-center  gap-3  flex-nowrap">
                {story?.topics.slice(0, limit).map((tag: any, index: number) => (
                    <>
                        <Link
                            key={index}
                            href={currentTag === tag ? `/blogs` : `/blogs/?tag=${tag}`}
                            onClick={(e) => handleClick(e, tag)}
                            className={` ${currentTag === tag ? '   bg-black text-white ' : ' border bg-gray-100 opacity-65'} whitespace-nowrap  sohne font-bold     transition-all ease-in  rounded-full  py-1 px-4  `}
                        >
                            {tag}
                        </Link>
                    </>
                ))}
                {story?.topics.length > limit && (
                    <p className="py-1 px-4 border sohne font-bold  bg-gray-100 rounded-full opacity-65">
                        +{story?.topics.length - limit}
                    </p>
                )}
            </div>
        </div>
    )
}

export default StoryTags