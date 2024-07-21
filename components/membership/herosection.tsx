/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Button } from '@/components/ui/button';
import data from '@/data/membership.json';
import Image from 'next/image';
import { PiStarFourFill } from "react-icons/pi";

const Herosection = () => {
    return (
        <main className='border border-t-0 border-l-0 border-r-0 border-black'>
            <div className='  flex-between mobile_right '>
                <section className='flex flex-col justify-between  h-[75vh] '>
                    <p className=' text-7xl'>Support human stories</p>
                    <section className=' space-y-10'>
                        <p className='sohne text-gray-500 w-2/3'>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</p>
                        <div className=' flex-start gap-4'>
                            <Button className=' sohne md:flex hidden font-bold rounded-full  '>Get started</Button>
                            <Button variant={'outline'} className='border border-black sohne md:flex hidden font-bold rounded-full  bg-[#F7F4ED]'>View plans</Button>
                        </div>
                    </section>
                </section>
                <section className="select-none border border-t-0 border-b-0 border-r-0 border-black ">
                    <Image width={600} height={600} src={`https://miro.medium.com/v2/1*pNQWumUtMEZnyCtz3o1MUQ.png`} alt={`image`} />
                    <section className=' p-8'>

                        <div className='flex mb-3'>
                            <span className="sohne flex-center gap-1 text-sm  bg-yellow-400 py-[5px] px-3 rounded-full   "><PiStarFourFill size={10} />Member-only story</span>
                        </div>
                        <h2 className=' text-3xl mb-5'>{`Henrietta Lacks, Subjectivity, & The Medical Exploitation of Women`}</h2>
                        <div className=" flex items-center gap-4 text-sm ">
                            <img src={`https://miro.medium.com/v2/resize:fill:96:96/1*UIl_8xj70gocPLKnaCUyEw.png`} alt={`Kai Wong`} className="author-img" />
                            <div className="">
                                <p className='sohne_bold text-sm '>{`Kai Wong`}</p>
                                <p className='sohne text-sm '>{`Writer for Cultured`}</p>
                            </div>
                        </div>
                    </section>
                </section>

                {/* {data.map((item, slideIndex) => (
                <div key={slideIndex} className="select-none ">
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
                </div>
            ))} */}
            </div>
        </main>
    )
}

export default Herosection