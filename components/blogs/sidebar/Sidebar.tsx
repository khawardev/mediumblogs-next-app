import React from "react";
import SidebarStories from "./SidebarStories";
import { Link } from 'next-view-transitions'
import Ads from "./Ads";

const Sidebar = ({ limitedStories }: any) => {
    return (
        <div className=" select-none">
            {limitedStories?.length >= 0 && <>
                <h3 className="font-semibold text-xl sohne_bold mb-5">Staff Picks</h3>
                <div className=" space-y-4 mb-4 ">
                    {limitedStories?.map((story: any, index: number) => (
                        <SidebarStories key={index} story={story} />
                    ))}
                </div>

                <Link className="text-green-500 text-[14px] sohne font-bold" href="#">
                    See the full list
                </Link>
            </>
            }
            <Ads />
        </div>
    );
};

export default Sidebar;