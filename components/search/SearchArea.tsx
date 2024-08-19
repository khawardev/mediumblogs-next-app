'use client';
import "@/public/assets/styles/search.css";
import { MdClose, MdOutlineErrorOutline } from 'react-icons/md';
import { useState } from 'react';
import { searchStoriesByContent } from "@/actions/story";
import StoryDetails from "../blogs/story/StoryDetails";
import StoryDetailSkeleton from "../skeletons/StoryDetailSkeleton";
import { useAtom } from "jotai";
import { ShowSearchAtom } from "@/context/atom";

const SearchArea = () => {
    const [ShowSearch, setShowSearch] = useAtom(ShowSearchAtom);

    const [inputValue, setInputValue] = useState<string>('');
    const [searchedStories, setSearchedStories] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const handleKeyDown = async (e: any) => {
        // const searchText = inputValue.toLowerCase();
        if (e.key === 'Enter') {
            setLoading(true)
            const result = await searchStoriesByContent(inputValue);
            setInputValue('');
            if ('error' in result) {
                setLoading(false)
                console.log(result.error);
            } else {
                setSearchedStories(result);
                setLoading(false)
            }
        }
    };

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    className="sohne_bold"
                    type="text"
                    autoFocus
                    placeholder="Search Stories"
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <MdClose className="cursor-pointer" onClick={() => setShowSearch(false)} />
            </div>
            <div className="pointer scrollable-div-search mobile_center ">
                {loading ? <><StoryDetailSkeleton /><StoryDetailSkeleton /></> :
                    !Array.isArray(searchedStories) || searchedStories.length === 0 ? (
                        <div className=" flex-center h-[520px]">
                            <div className=" flex-center flex-col">
                                <MdOutlineErrorOutline size={90} className=' opacity-10' />
                                <p className=" md:text-3xl text-2xl opacity-20 sohne_bold"> Search is Empty </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            {searchedStories?.map((story: any, index: number) => (
                                <StoryDetails key={index} story={story} />
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default SearchArea;
