import Link from "next/link"
import { useEffect, useState } from "react";

const StoryTags = ({ story, limit }: any) => {

    useEffect(() => {

    }, []);
    const [currentTag, setCurrentTag] = useState('');

    const handleClick = (tag: any) => {
        setCurrentTag((prevTag) => (prevTag === tag ? '' : tag));
    };
    return (
        <div className="flex-center gap-2">
            {/* <div className="flex-center sohne font-bold sm:flex hidden  gap-3 flex-nowrap">
                {story?.topics.slice(0, 3).map((tag: any, index: number) => (
                    <>
                        <Link
                            key={index}
                            href={currentTag === tag ? `/blogs` : `/blogs/?tag=${tag}`}
                            onClick={() => handleClick(tag)}
                            className={` ${currentTag === tag ? ' border  bg-green-500 text-white ' : ' border    bg-gray-100'} whitespace-nowrap  sohne font-bold    transition-all ease-in  rounded-full  py-1 px-4  `}
                        >
                            {tag}
                        </Link>
                    </>
                ))}
                {story?.topics.length > 3 && (
                    <p className="py-1 px-4 border sohne font-bold   bg-gray-100 rounded-full">
                        +{story?.topics.length - 3}
                    </p>
                )}
            </div> */}

            <div className="flex-center  gap-3  flex-nowrap">
                {story?.topics.slice(0, limit).map((tag: any, index: number) => (
                    <>
                        <Link
                            key={index}
                            href={currentTag === tag ? `/blogs` : `/blogs/?tag=${tag}`}
                            onClick={() => handleClick(tag)}
                            className={` ${currentTag === tag ? ' border  bg-green-500 text-white ' : ' border    bg-gray-100'} whitespace-nowrap  sohne font-bold  opacity-65   transition-all ease-in  rounded-full  py-1 px-4  `}
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