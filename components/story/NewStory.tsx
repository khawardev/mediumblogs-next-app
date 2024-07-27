'use client';
import { useEffect, useRef } from "react";
import mediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

interface Props {
    storyID: string;
    storyContent: string;
}

const NewStory = ({ storyID, storyContent }: Props) => {
    const contentEditableRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && contentEditableRef.current) {
            const editor = new mediumEditor(contentEditableRef.current, {
                toolbar: {
                    buttons: ['h1', 'h4', 'bold', 'underline', 'italic', 'anchor', 'quote'],
                }
            });

            return () => {
                editor.destroy();
            };
        }
    }, []);

    return (
        <main className="md:w-11/12 m-auto md:py-10 py-5 h-[540px]  ">
            <section id="container">
                <section
                    id="editable"
                    ref={contentEditableRef}
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
        </main>
    );
}

export default NewStory;
