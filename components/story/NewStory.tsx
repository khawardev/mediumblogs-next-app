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
                    // buttons: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'anchor', 'quote', 'bold', 'italic', 'underline', 'orderedList', 'unorderedList', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull', 'removeFormat'],
                    buttons: ['h1', 'h4', 'anchor', 'quote', 'bold', 'italic', 'underline'],
                }
            });

            return () => {
                editor.destroy();
            };
        }
    }, []);

    return (
        <main className="md:w-11/12 m-auto md:py-10 py-5">
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
                            <h1 data-h1-placeholder="New Story title">Title</h1>
                            <p data-p-placeholder="New Story content">Tell Your Story</p>
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}

export default NewStory;
