"use client";
import { getStoryClapCountByUser, updateClapStoryCount } from "@/actions/claps";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import ClapIcons from "@/components/ClapIcons";

type ClapCountCompProps = {
    clapByUser?: any;
    storyId: any;
    currentUser?: string,
    allClapsCount: string,
    // commentId?: string,
    // type?: string,

};

const ClapComp = ({ allClapsCount, storyId, currentUser, clapByUser }: ClapCountCompProps) => {
    const [allClaps, setAllClaps] = useState<any>(allClapsCount);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { toast } = useToast()

    const clap = async () => {
        if (!currentUser) {
            toast({
                title: 'Please Login to continue',
            })
            return;
        }
        if (clapByUser >= 20) {
            toast({
                title: 'Max 20 claps are allowed',
            })
            return;
        }
        setAllClaps((prev: any) => prev + 1);
        setIsButtonDisabled(true);

        try {
            await updateClapStoryCount(storyId);
            setIsButtonDisabled(false);

        } catch (error) {
            toast({
                title: 'Error while clapping story or comment or reply',
            })
        }

    };

    return (
        <section className="flex-center gap-1">
            <button disabled={isButtonDisabled} onClick={(e) => { e.preventDefault(); clap() }}>
                <ClapIcons clapByUser={clapByUser} />
            </button>
            <p className="text-sm text-slate-400 sohne font-bold">{allClaps}</p>
        </section>
    );
};

export default ClapComp;