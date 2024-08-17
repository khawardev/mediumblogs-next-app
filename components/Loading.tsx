'use client'
import Mediumsvg from './mediumsvg'
import { useAtom } from 'jotai';
import { ShowSearchAtom } from '@/context/atom';
import { useEffect } from "react";
const Loading = () => {
    const [ShowSearch, setShowSearch] = useAtom(ShowSearchAtom);
    useEffect(() => {
        setShowSearch(false)
    }, []);
    return (
        <main className='absolute z-50 bg-[#FFFFFF] md:h-[89.5vh] h-[81.5vh] w-full flex-center'>
            <Mediumsvg clasName="animate-pulse  " size={30} />
        </main>
    )
}

export default Loading