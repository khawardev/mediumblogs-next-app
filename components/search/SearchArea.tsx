'use client';
import "@/public/assets/styles/search.css";
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { useToast } from "../ui/use-toast";

const SearchArea = ({ setShowSearch }: any) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [searchedStories, setSearchedStories] = useState<any[]>([]);

    const handleKeyDown = (e: any) => {
        const searchText = inputValue.toLowerCase();
        if (e.key === 'Enter') {
            console.log(searchText, 'inputValue');
            // setSearchedStories(products.filter((product: any) => product.name.toLowerCase().includes(searchText)));
            setInputValue('');
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
            <div className="pointer scrollable-div-search">

            </div>
        </div>
    );
};

export default SearchArea;
