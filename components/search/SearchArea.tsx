'use client';
import "@/public/assets/styles/search.css";
import { MdClose } from 'react-icons/md';
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
            console.log(result, 'resultresultresult');

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
                            <p className=" text-3xl opacity-25 sohne_bold"> Search is Empty </p>
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
