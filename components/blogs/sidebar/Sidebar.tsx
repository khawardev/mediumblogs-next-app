import React from "react";
import SidebarStories from "./SidebarStories";
import Link from "next/link";
import Ads from "./Ads";

const Sidebar = ({ stories }: any) => {
    return (
        <div>
            {stories && <>
                <h3 className="font-semibold text-xl sohne_bold mb-5">Staff Picks</h3>
                <div className=" space-y-4 mb-4">
                    {stories?.map((story: any, index: number) => (
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