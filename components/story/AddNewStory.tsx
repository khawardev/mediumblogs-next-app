'use client'
import MarkdownToHtml from "@/lib/markdownToHtml";
import { Editor } from "novel-lightweight";
import { useEffect, useState } from "react";
import { handleUploadcare } from "@/lib/uploadcareUpload";
import '@/public/assets/styles/markdown.css';
import { useAtom } from "jotai";
import { savingAtom } from "@/context/atom";
import { updateStory } from "@/actions/story";
import { getUser } from "@/actions/user";
import { mutate } from "swr";
import { usePathname } from "next/navigation";

interface Props {
    storyID: string;
    HtmlToMarkdown: string;
    publishStatus: boolean;
}

export default function AddNewStory({ storyID, HtmlToMarkdown, publishStatus }: Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const pathname = usePathname();
    const [markdownContent, setmarkdownContent] = useState(HtmlToMarkdown);
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

        markdownContent !== '' && setSaving(true);
        // setSaving(true);
        try {
            const userfromDb: any = await getUser();
            if (markdownContent !== '') {
                await updateStory(storyID, htmlData, publishStatus, pathname);
                mutate([userfromDb?.id, false]);
                mutate([userfromDb?.id, true]);
            }
            // await updateStory(storyID, htmlData, publishStatus, pathname);

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
                debounceDuration={2000}
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
