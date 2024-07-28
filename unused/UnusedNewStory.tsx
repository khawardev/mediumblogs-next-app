'use client';
import { useEffect, useRef, useState } from "react";
import mediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import { updateStory } from "@/actions/story";
import { useAtom } from "jotai";
import { savingAtom } from "@/context/atom";
import { Button } from "@/components/ui/button";
import { Image, Plus } from "lucide-react";
import { createRoot } from 'react-dom/client';
import ImageComp from "@/components/story/ImageComp";

interface Props {
    storyID: string;
    storyContent: string;
}

const UnusedNewStory = ({ storyID, storyContent }: Props) => {
    const [saving, setSaving] = useAtom(savingAtom);
    const [tools, setTools] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
    const contentEditRef = useRef<HTMLDivElement | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);


    function debounce<T extends (...args: any[]) => any>(
        func: T,
        delay: number
    ): (...args: Parameters<T>) => void {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
            clearTimeout(timeoutId); // Explicitly cast timeoutId to number
            timeoutId = setTimeout(() => {
                func.apply(this, args) as any; // Explicitly cast func to T(...args);
            }, delay);
        }

    }

    const handleSave = async () => {
        const content = contentEditRef.current?.innerHTML;
        setSaving(true);
        try {
            const update = await updateStory(storyID, content);
            console.log('update --- ', update);

        } catch (error) {
            console.log('error in saving')
        }
        setSaving(false);
    }
    const debounceHandle = useRef<any>(
        debounce(() => {
            handleSave();
        }, 3000)
    ).current;


    const getPosition = () => {
        let y = 0;
        const isSupport = typeof window.getSelection !== 'undefined';

        if (isSupport) {
            const range = window.getSelection()?.getRangeAt(0);
            const rect = range?.getBoundingClientRect();
            if (rect) {
                y = rect.top;
            }
        }
        return { y };


    }

    useEffect(() => {
        const handleInput = () => {
            const { y } = getPosition();
            setButtonPosition({ top: y, left: 0 });
            debounceHandle();
        }
        contentEditRef.current?.addEventListener("input", handleInput)
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && contentEditRef.current) {
            const editor = new mediumEditor(contentEditRef.current, {
                toolbar: {
                    buttons: ['h1', 'h4', 'bold', 'underline', 'italic', 'anchor', 'quote'],
                }
            });

            return () => {
                editor.destroy();
            };
        }
    }, []);

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0];
        console.log('file --- ', file);

        if (file) {
            setTools(true);
            const imageUrl = URL.createObjectURL(file)
            if (typeof window !== 'undefined') {
                const divWrapper = document.createElement('div');
                const root = createRoot(divWrapper)
                root.render(
                    <ImageComp
                        imageUrl={imageUrl}
                        file={file}
                        handleSave={debounceHandle}

                    />
                )
            }

        }
    }





    return (
        <main className="md:w-11/12 md:px-10  m-auto py-[100px] ">
            <section id="container">
                <section
                    id="editable"
                    ref={contentEditRef}
                    contentEditable
                    className="outline-none focus:outline-none"
                >
                    {storyContent ? (
                        <div dangerouslySetInnerHTML={{ __html: storyContent }} />
                    ) : (
                        <div>
                            <h1 data-h1-placeholder="Title"></h1>
                            <p data-p-placeholder="Tell your story..."></p>
                        </div>
                    )}
                </section>
            </section>



            <div
                className={`z-10 bg-[#FFFFFF]  button-container ${buttonPosition.top === 0 ? 'hidden' : ' absolute'} `}
                style={{ top: buttonPosition.top }}
            >
                <Button className="  rounded-full" id="tooltip" onClick={() => setTools(!tools)} variant={'outline'} size={'iconsm'}>
                    <Plus size={20} className={`  duration-150 ease-linear ${tools ? "rotate-45" : ""}`} />
                </Button>
            </div>

            <div
                className={`z-10 flex absolute  button-container bg-[#FFFFFF]`}
                style={{ top: buttonPosition.top + 50 }}
            >
                <span onClick={() => fileRef?.current?.click()} className={` border rounded-full p-2 ${tools ? 'scale-100  visible' : 'scale-0 invisible'} ease-linear duration-150 cursor-pointer`}>
                    <Image size={20} className=" opacity-60 text-green-800" />
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileRef}
                        onChange={handleFileChange}
                    />
                </span>
            </div>




        </main>
    );
}

export default UnusedNewStory;
