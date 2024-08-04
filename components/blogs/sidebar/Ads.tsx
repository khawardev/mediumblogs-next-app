import Link from "next/link";
import React from "react";

const Ads = () => {
    return (
        <div className="border my-10 p-5 rounded-lg bg-blue-200 sohne">
            <h3 className="text-lg font-semibold sohne_bold">Writing on Medium</h3>
            <ul className="space-y-3 pt-6 pb-7">
                <li>
                    <Link className="sohne font-semibold" href="#">
                        New Writer FAQ
                    </Link>
                </li>
                <li>
                    <Link className="sohne font-semibold" href="#">
                        Expert writing advice
                    </Link>
                </li>
                <li>
                    <Link className="sohne font-semibold" href="#">
                        Grow your readership
                    </Link>
                </li>
            </ul>
            <button className=" rounded-full text-[14px]  tracking-wide sohne font-semibold bg-black text-white p-[6px] px-4">
                Start writing
            </button>
        </div>
    );
};

export default Ads;