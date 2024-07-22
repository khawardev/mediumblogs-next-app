/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Button } from '@/components/ui/button';
import data from '@/data/membership.json';
import Image from 'next/image';
import { PiStarFourFill } from "react-icons/pi";
import Slider from './slider';

const Herosection = () => {
    return (
        <main className='border border-t-0 border-l-0 border-r-0 border-black'>
            <div className=' mobile_right_center'>
                <section className='grid md:grid-cols-3  lg:gap-24'>
                <section className=' md:col-span-2  flex flex-col justify-between  py-16 lg:space-y-0 space-y-5'>
                    <p className=' md:text-7xl text-5xl'>Support human stories</p>
                    <section className=' space-y-10'>
                        <p className='sohne text-lg  text-gray-500 lg:w-2/3 sm:w-4/5  '>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</p>
                        <div className=' flex-start gap-4'>
                            <Button className=' sohne  font-bold rounded-full  '>Get started</Button>
                            <Button variant={'outline'} className='border border-black sohne  font-bold rounded-full  bg-[#F7F4ED]'>View plans</Button>
                        </div>
                    </section>
                </section>
                <section className="md:col-span-1 select-none border md:border-t-0 border-t  border-b-0 md:border-r-0 border-black  ">
                    {/* <Image width={1000} height={1000} src={`https://miro.medium.com/v2/1*pNQWumUtMEZnyCtz3o1MUQ.png`} alt={`image`} />
                    <section className=' p-8'>
                        <div className='flex mb-3'>
                            <span className="sohne flex-center gap-1 text-sm  bg-yellow-400 py-[5px] px-3 rounded-full   "><PiStarFourFill size={10} />Member-only story</span>
                        </div>
                        <h2 className=' lg:text-3xl text-2xl mb-5'>{`Henrietta Lacks, Subjectivity, & The Medical Exploitation of Women`}</h2>
                        <div className=" flex items-center gap-4 text-sm ">
                            <img src={`https://miro.medium.com/v2/resize:fill:96:96/1*UIl_8xj70gocPLKnaCUyEw.png`} alt={`Kai Wong`} className="author-img" />
                            <div className="">
                                <p className='sohne_bold text-sm '>{`Kai Wong`}</p>
                                <p className='sohne text-sm '>{`Writer for Cultured`}</p>
                            </div>
                        </div>
                    </section> */}

                    <Slider />
                </section>
                </section>

            </div>
        </main>
    )
}

export default Herosection