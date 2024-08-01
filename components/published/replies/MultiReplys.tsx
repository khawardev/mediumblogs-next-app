import { useState, useEffect } from "react";
import { getUserbyID } from "@/actions/user";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CgSpinner } from "react-icons/cg";

export const CalculateDaysAgo = (createdAt: any) => {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference: number = currentDate.getTime() - createdDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysAgo;
}

const MultiReplys = ({ replies }: any) => {
    const [userDetails, setUserDetails] = useState<any[]>([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const users = await Promise.all(
                replies.map(async (reply: any) => {
                    const userDetail = await getUserbyID(reply?.userId);
                    return userDetail;
                })
            );
            setUserDetails(users);
        };

        fetchUserDetails();
    }, [replies]);

    return (
        <>
            {!userDetails[0]?.image ? (
                <div className="py-10 flex items-center justify-center">
                    <CgSpinner className="animate-spin" size={20} />
                </div>
            ) : (
                replies?.slice().reverse().map((reply: any, index: any) => {
                    const userDetail = userDetails[index];
                    return (
                        <div key={index} className="flex mt-6 gap-4 text-sm">
                            <Avatar className="w-10 h-10 border">
                                <AvatarImage src={userDetail?.image} />
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="font-semibold">{userDetail?.name}</div>
                                    <div className="text-xs text-muted-foreground">
                                        {CalculateDaysAgo(reply?.createdAt)} days ago
                                    </div>
                                </div>
                                <div className="break-words break-all">{reply?.content}</div>
                            </div>
                        </div>
                    );
                })
            )}

        </>
    );
}

export default MultiReplys;
