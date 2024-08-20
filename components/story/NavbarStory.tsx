'use client'
import { Link } from 'next-view-transitions'
import Mediumsvg from "../mediumsvg";
import { useState } from "react";
import { savingAtom } from "@/context/atom";
import { useAtom } from "jotai";
import { StoryShadcnDialog } from "@/components/story/StoryShadcnDialog";
import { CgSpinner } from "react-icons/cg";

const NavbarStory = ({ storyID, currentUserName, storyContent, publishStatus }: { storyID: string, currentUserName: string, storyContent: string, publishStatus: boolean }) => {
  const [saving, setSaving] = useAtom(savingAtom);
  const [Showtags, setShowtags] = useState(false);
  const userName = currentUserName.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());;

  return (
    <main className="  pt-10  sohne  " >
      <section className="flex-between gap-4 font-bold    ">
        <section className="flex-center  gap-4 ">
          <p className=" text-sm sm:block hidden ">Draft in <span className=''>{userName}</span>&lsquo;s Profile</p>
          <p className=" text-sm sohne font-bold  ">{saving ?
            <div className=" flex-center gap-2">
              Saving
              <CgSpinner className="animate-spin" size={16} />
            </div> :
            'Saved'
          }
          </p>
        </section>
        {publishStatus === false &&
          <StoryShadcnDialog storyContent={storyContent} storyID={storyID} username={currentUserName} setShowtags={setShowtags} title="Publish" className=" h-9 px-5 py-2  border hover:border-[#1A8917]  hover:text-white hover:bg-[#1A8917]   sohne font-bold" />
        }
      </section>

    </main>
  )
}

export default NavbarStory
