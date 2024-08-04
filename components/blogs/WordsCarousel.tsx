import React, { useRef } from "react";
import Link from "next/link";
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
                {allTopics.map((allTopic: any, index: number) => (
                    <Link
                        key={index}
                        href={`/blogs/?tag/${allTopic.value}`}
                        className="sohne font-bold border  bg-gray-100 transition-all ease-in  rounded-full  py-1 px-4  "
                        style={{
                            scrollSnapAlign: "start", // Align each item to start at the beginning of the container
                            flexShrink: 0, // Prevent items from shrinking
                        }}
                    >
                        {allTopic.value}
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
