'use client'
import { useEffect, useRef, useState } from "react"
import mediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
interface Props {
    storyID: string
    storyContent: string
}
const NewStory = ({ storyID, storyContent }: Props) => {

    const contentEditableRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const editor = new mediumEditor('.editable', {
                elementContainer: document.getElementById('container') as HTMLElement,
                toolbar: {
                    buttons: ['bold', 'italic', 'underline', 'orderedList', 'unorderedList', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull', 'removeFormat', 'h2', 'h3', 'h4', 'h5', 'h6', 'anchor', 'h1', 'quote'],
                }
            });
            return () => {
                editor.destroy();
            };
        }
    }, []);

    return (
        <main className="md:w-10/12 m-auto py-10 ">
            <section id='container'>
                <section
                    id='editable'
                    suppressContentEditableWarning
                    ref={contentEditableRef}
                    contentEditable
                    className="   outline-none   focus:ouline-none "



                >
                    {storyContent ? (
                        <div
                            dangerouslySetInnerHTML={{ __html: storyContent }}
                        />
                    ) :
                        <div>
                            <h1 className=" text-4xl " data-h1-placeholder='New Story title'>Title</h1>
                            <p  data-p-placeholder='New Story content'>Tell Your Story</p>


                        </div>
                    }


                </section>

            </section>


        </main>
    )
}

export default NewStory