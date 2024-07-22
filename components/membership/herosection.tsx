/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Button } from '@/components/ui/button';
import Slider from './slider';

const Herosection = () => {
    return (
        <main className='border border-t-0 border-l-0 border-r-0 border-black'>
            <div className='mobile_right_center'>
                <section className='grid md:grid-cols-3  lg:gap-24'>
                    <section className=' md:col-span-2  flex flex-col justify-between   py-16 lg:space-y-0 space-y-5'>
                        <p className=' md:text-7xl text-5xl'>Support human stories</p>
                        <section className=' space-y-10'>
                            <p className='sohne text-lg  text-gray-500 lg:w-2/3 sm:w-4/5  '>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</p>
                            <div className=' flex-start gap-4'>
                                <Button className=' sohne  font-bold rounded-full  '>Get started</Button>
                                <Button variant={'outline'} className='border border-black sohne  font-bold rounded-full  bg-[#F7F4ED]'>View plans</Button>
                            </div>
                        </section>
                    </section>
                    <section className="md:col-span-1 select-none border md:border-t-0 border-t  border-b-0 md:border-r-0 border-black   ">
                        <Slider />
                    </section>
                </section>

            </div>
        </main>
    )
}

export default Herosection