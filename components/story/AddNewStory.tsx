'use client'
import MarkdownToHtml from "@/lib/markdownToHtml";
import { Editor } from "novel-lightweight";
import { useEffect, useState } from "react";
import { handleUploadcare } from "@/lib/uploadcareUpload";
import '@/public/assets/styles/markdown.css';
import { useAtom } from "jotai";
import { savingAtom } from "@/context/atom";
import { deleteStoryById, updateStory } from "@/actions/story";

interface Props {
    storyID: string;
    HtmlToMarkdown: string;
    publishStatus: boolean;
}

export default function AddNewStory({ storyID, HtmlToMarkdown, publishStatus }: Props) {
    const [markdownContent, setmarkdownContent] = useState(HtmlToMarkdown || '');
    const [htmlData, setHtmlData] = useState("");
    const [saving, setSaving] = useAtom(savingAtom);
    useEffect(() => {
        const convertMarkdownToHtml = async () => {
            const html = await MarkdownToHtml(markdownContent);
            setHtmlData(html);
        };
        convertMarkdownToHtml()
    }, [markdownContent]);


    const handleSave = async () => {
        setSaving(true);
        try {
            // if (markdownContent === '') {
            //     await deleteStoryById(storyID, path);
            // } else {
            //     await updateStory(storyID, data);
            // }
            await updateStory(storyID, htmlData, publishStatus);
        } catch (error) {
            console.log('Error in saving:', error);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div>
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
        </div>
    );
}
