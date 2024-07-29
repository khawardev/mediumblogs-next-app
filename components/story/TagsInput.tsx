'use client'
import { useState } from 'react';
import { X } from "lucide-react"
import { toast } from '../ui/use-toast';
import { useAtom } from 'jotai';
import { TopicsAtom } from '@/context/atom';

const TagsInput = () => {
    const [topics, setTopics] = useAtom(TopicsAtom);
    const [currentInput, setCurrentInput] = useState<string>('');

    const handleChange = (e: any) => {
        setCurrentInput(e.target.value);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter' && currentInput) {
            if (topics.length >= 5) {
                toast({
                    title: 'You can add up to 5 topics only',
                })
            } else {
                setTopics(prev => [...prev, currentInput]);
                setCurrentInput('');
            }
        }
    };

    const handleDelete = (index: any) => {
        setTopics(prev => prev.filter((_, i) => i !== index));
    };


    return (
        <div className=" ">

            <input
                type="text"
                value={currentInput}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="flex-grow w-full p-2 focus:outline-none border border-gray-300 rounded-md"
                placeholder="Add a Topic..."
            />
            <div className="flex flex-wrap items-center  mt-2  ">
                {topics?.map((value, index) => (
                    <div key={index} className=" mr-1 my-1 flex-center py-[2px] px-3 bg-gray-200 rounded-full ">
                        <p className="mr-2 ">{value}</p>
                        <button
                            onClick={() => handleDelete(index)}
                            className=" focus:outline-none"
                        >
                            <X size={12} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagsInput;


