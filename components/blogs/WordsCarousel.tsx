import { useRef, useState } from "react";
import { Link } from 'next-view-transitions'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WordsCarousel = ({ allTopics }: any) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -100, // Adjust the value as needed
                behavior: "smooth",
            });
        }
    };
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 100, // Adjust the value as needed
                behavior: "smooth",
            });
        }
    };
    const [currentTag, setCurrentTag] = useState('');

    const handleClick = (tag: any) => {
        setCurrentTag((prevTag) => (prevTag === tag ? '' : tag));
    };
    return (
        <div className="flex-between w-full ">
            <button onClick={scrollLeft} >
                <IoIosArrowBack className=" text-gray-300 hover:text-gray-500 transition-all ease-in" size={'22'} />
            </button>
            <section
                ref={sliderRef}
                className="sm:w-full w-[250px] text-sm   flex justify-start overflow-x-auto space-x-2 scrollbar-hide "
                style={{

                    scrollSnapType: "x mandatory",
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                }}>
                {allTopics.map((userTag: any, index: number) => (
                    <Link
                        key={index}
                        href={currentTag === userTag.value ? `/blogs` : `/blogs/?tag=${userTag.value}`}
                        onClick={() => handleClick(userTag.value)}
                        className={` ${currentTag === userTag.value ? ' border-2 border-green-500' : ' border'}  sohne font-bold  bg-gray-100 transition-all ease-in  rounded-full  py-1 px-4  `}
                        style={{
                            scrollSnapAlign: "start", // Align each item to start at the beginning of the container
                            flexShrink: 0, // Prevent items from shrinking
                        }}
                    >
                        {userTag.value}
                    </Link>
                ))}
            </section>
            <button onClick={scrollRight} >
                <IoIosArrowForward className=" text-gray-300 hover:text-gray-500 transition-all ease-in" size={'22'} />
            </button>
        </div>
    );
};

export default WordsCarousel;
