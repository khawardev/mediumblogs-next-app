'use client';
import data from '@/data/membership.json';
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
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
                setOpacity(1); // Start the fade-in effect
            }, 3000); // Adjust the duration to match your transition duration
        }, 4000);
        return () => clearInterval(sliderInterval);
    }, [currentIndex, data?.length]);

    return (
        <div  >
            {data &&
                data?.map((item, slideIndex) => (
                    <div key={slideIndex} style={{
                        opacity: currentIndex === slideIndex ? opacity : 0,
                        transition: 'opacity 1s ease-in-out',

                    }} className="select-none ">
                        {currentIndex === slideIndex && (
                            <main className='relative ' >
                                <Image className=' ' width={1000} height={1000} src={item.imgUrl} alt={item.title} />
                                <section className=' p-6   '>
                                    <div className='flex mb-3'>
                                        <span className="sohne flex-center gap-1 text-sm  bg-yellow-400 py-[5px] px-3 rounded-full font-bold  "><PiStarFourFill size={10} />{item.membershipTag}</span>
                                    </div>
                                    <div className='md:h-[220px] h-[240px] '>
                                        <h2 className='  text-2xl py-5 '>{item.title}</h2>
                                    </div>
                                    <div className=" flex items-start gap-4 text-sm  ">
                                        <Image width={50} height={50} src={item.authorImg} alt={item.authorName} className="author-img" />
                                        <div >
                                            <p className='sohne font-bold text-sm '>{item.authorName}</p>
                                            <p className='sohne text-muted-foreground text-sm font-bold '>{item.authorProfession}</p>
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
