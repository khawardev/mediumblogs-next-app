import { useRef, useState } from "react";
import { Link } from 'next-view-transitions'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMedium } from "react-icons/fa6";

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
    // const [currentTag, setCurrentTag] = useState('');
    // const handleClick = (tag: any) => {
    //     setCurrentTag((prevTag) => (prevTag === tag ? '' : tag));
    // };

    const [currentTag, setCurrentTag] = useState("For You");

    const handleClick = (tag: any) => {
        setCurrentTag(tag);
    };

    return (
        <div className="flex-between  ">
            <button onClick={scrollLeft} className=" sm:block hidden" >
                <IoIosArrowBack className=" text-gray-300 hover:text-gray-500 transition-all ease-in" size={'22'} />
            </button>
            <section
                ref={sliderRef}
                className=" realtive lg:w-[760px]   sm:w-[560px] w-[280px]  flex justify-start overflow-x-auto space-x-1 scrollbar-hide "
                style={{

                    scrollSnapType: "x mandatory",
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                }}>
                <Link
                    href="/blogs"
                    onClick={() => handleClick("For You")}
                    className={` ${currentTag === "For You" && 'underline opacity-100'} flex-center gap-1 opacity-50 underline-offset-[19px] sm:decoration-2 decoration-1  sohne transition-all ease-in px-3`}
                    style={{
                        scrollSnapAlign: "start",
                        flexShrink: 0,
                    }}
                >
                    <FaMedium strokeWidth={1.25} size={20} /> Blogs
                </Link>
                {allTopics.map((userTag: any, index: number) => (
                    <>


                        <Link
                            key={index}
                            href={`/blogs/?tag=${userTag.value}`}
                            onClick={() => handleClick(userTag.value)}
                            className={` ${currentTag === userTag.value && 'underline opacity-100'} opacity-50 underline-offset-[22px] sm:decoration-2 decoration-1  sohne transition-all ease-in   px-3  `}
                            style={{
                                scrollSnapAlign: "start", // Align each item to start at the beginning of the container
                                flexShrink: 0, // Prevent items from shrinking
                            }}
                        >
                            {userTag.value}
                        </Link>
                    </>

                ))}
            </section>
            <button onClick={scrollRight} className="sm:block hidden" >
                <IoIosArrowForward className=" text-gray-300 hover:text-gray-500 transition-all ease-in" size={'22'} />
            </button>
        </div>
    );
};

export default WordsCarousel;
