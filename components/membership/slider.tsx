/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import data from '@/data/membership.json'; // Adjust the path based on your file structure
import { useState, useEffect } from 'react';
import { PiStarFourFill } from "react-icons/pi";
import Image from 'next/image';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setOpacity(0); // Start the fade-out effect
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
                setOpacity(1); // Start the fade-in effect
            }, 350); // Adjust the duration to match your transition duration
        }, 3000);
        return () => clearInterval(sliderInterval);
    }, [currentIndex, data.length]);

    return (
        <div  >
            {data?.map((item, slideIndex) => (
                <div key={slideIndex} style={{
                    opacity: currentIndex === slideIndex ? opacity : 0,
                    transition: 'opacity 0.2s ease-in-out',

                }} className="select-none ">
                    {currentIndex === slideIndex && (
                        <main className='relative' >
                            <Image className=' ' width={1000} height={1000} src={item.imgUrl} alt={item.title} />
                            <section className=' p-6  '>
                                <div className='flex mb-3'>
                                    <span className="sohne flex-center gap-1 text-sm  bg-yellow-400 py-[5px] px-3 rounded-full   "><PiStarFourFill size={10} />{item.membershipTag}</span>
                                </div>
                                <div className='lg:h-[170px] h-[200px]'>
                                    <h2 className=' lg:text-3xl text-3xl py-5 '>{item.title}</h2>
                                </div>
                                <div className=" flex items-start gap-4 text-sm  ">
                                    <Image width={50} height={50} src={item.authorImg} alt={item.authorName} className="author-img" />
                                    <div >
                                        <p className='sohne_bold text-sm '>{item.authorName}</p>
                                        <p className='sohne text-sm '>{item.authorProfession}</p>
                                    </div>
                                </div>
                            </section>
                        </main>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Slider;
