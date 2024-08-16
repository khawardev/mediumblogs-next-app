'use client'
import MarkdownToHtml from "@/lib/markdownToHtml";
import { Editor } from "novel-lightweight";
import { useEffect, useRef, useState } from "react";
import { handleUploadcare } from "@/lib/uploadcareUpload";
import '@/public/assets/styles/markdown.css';
import { useAtom } from "jotai";
import { savingAtom } from "@/context/atom";
import { deleteStoryById, updateStory } from "@/actions/story";
import { usePathname } from "next/navigation";

interface Props {
    storyID: string;
    storyContent: string;
}

export default function AddNewStory({ storyID, storyContent }: Props) {
    const [markdownContent, setmarkdownContent] = useState('');
    const [saving, setSaving] = useAtom(savingAtom);
    const [data, setData] = useState("");
    console.log(markdownContent, 'markdownContentmarkdownContent');
    const path = usePathname();

    useEffect(() => {
        const convertMarkdown = async () => {
            const html = await MarkdownToHtml(markdownContent);
            setData(html);
        };
        convertMarkdown();
    }, [markdownContent]);

    const handleSave = async () => {
        setSaving(true);
        try {
            // if (markdownContent === '') {
            //     await deleteStoryById(storyID, path);
            // } else {
            //     await updateStory(storyID, data);
            // }
            await updateStory(storyID, data);
        } catch (error) {
            console.log('Error in saving:', error);
        } finally {
            setSaving(false);
        }
    };


    return (
        <div>


            {/* {storyContent ? (
                <div className="markdown-body space-y-5" dangerouslySetInnerHTML={{ __html: storyContent }} />
            ) : ( */}
            <Editor
                defaultValue={markdownContent}
                disableLocalStorage={true}
                onDebouncedUpdate={handleSave}
                debounceDuration={3000}
                onUpdate={(editor) => {
                    setmarkdownContent(editor?.storage.markdown.getMarkdown());
                }}
                handleImageUpload={async (file) => {
                    const result: any = await handleUploadcare(file);
                    if (result) {
                        return result.results[result.results.length - 1].originalFileUrl;
                    }
                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637";
                }}
                className='w-full  shadow-none border-none rounded-none   '
            />
            {/* )} */}


        </div>
    );
}

//  <hr className=" my-3" />
//       <div className="markdown-body space-y-5" dangerouslySetInnerHTML={{ __html: data }} />
//       <hr className=" my-3" />
//       <div>
//         {markdownContent}
//       </div>
//       <hr className=" my-3" />
//       <div>
//         {data}
//       </div>