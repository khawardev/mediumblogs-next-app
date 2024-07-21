/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import data from '@/data/membership.json'; // Adjust the path based on your file structure
import { useState, useEffect } from 'react';
import { PiStarFourFill } from "react-icons/pi";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setOpacity(0); // Start the fade-out effect
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
                setOpacity(1); // Start the fade-in effect
            }, 500); // Adjust the duration to match your transition duration
        }, 5000);
        return () => clearInterval(sliderInterval);
    }, [currentIndex, data.length]);

    return (
        <div>
            {data.map((item, slideIndex) => (
                <div key={slideIndex} style={{
                    opacity: currentIndex === slideIndex ? opacity : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }} className="select-none ">
                    {currentIndex === slideIndex && (
                        <>

                            <img src={item.imgUrl} alt={item.title} className="mb-2" />
                            <div className='flex mb-3'>
                                <span className="sohne flex-center gap-1 text-sm  bg-yellow-400 py-[5px] px-3 rounded-full   "><PiStarFourFill size={10} />{item.membershipTag}</span>
                            </div>
                            <h2 className=' text-3xl mb-5'>{item.title}</h2>
                            <div className=" flex items-center gap-4 text-sm ">
                                <img src={item.authorImg} alt={item.authorName} className="author-img" />
                                <div className="">
                                    <p className='sohne_bold text-sm '>{item.authorName}</p>
                                    <p className='sohne text-sm '>{item.authorProfession}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Slider;
