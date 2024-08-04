"use client";
import { getStoryClapCountByUser, updateClapStoryCount } from "@/actions/claps";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import ClapIcons from "@/components/ClapIcons";

type ClapCountCompProps = {
    // userClaps?: any;
    storyId: any;
    currentUser?: string,
    allClapsCount: string,
    // commentId?: string,
    // type?: string,

};

const ClapComp = ({ allClapsCount, storyId, currentUser }: ClapCountCompProps) => {
    const [clapByUser, setClapByUser] = useState<any>(0);
    const [allClaps, setAllClaps] = useState<any>(allClapsCount);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { toast } = useToast()


    useEffect(() => {
        const fetchClapCount = async () => {
            const ClapsCountByUser = await getStoryClapCountByUser(storyId);
            setClapByUser(ClapsCountByUser?.clapCount);
        };
        fetchClapCount();
    }, [allClaps]);


    const clapComment = async () => {
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
            // setAllClaps((prev: any) => prev - 1);
            // setClapByUser((prev: any) => prev - 1);
            toast({
                title: 'Error while clapping story or comment or reply',
            })
        }

    };

    return (
        <section className="flex-center gap-1">
            <button disabled={isButtonDisabled} onClick={(e) => { e.preventDefault(); clapComment() }}>
                <ClapIcons clapByUser={clapByUser} />
            </button>
            <p className="text-sm text-slate-400 sohne font-bold">{allClaps}</p>
        </section>
    );
};

export default ClapComp;