'use client'
import Link from "next/link";
import Mediumsvg from "../mediumsvg";
import { useState } from "react";
import { savingAtom } from "@/context/atom";
import { useAtom } from "jotai";
import { StoryShadcnDialog } from "@/components/story/StoryShadcnDialog";
import LoadingIcon from "../loadingIcon";

const NavbarStory = ({ storyID, currentUserName, storyContent }: { storyID: string, currentUserName: string, storyContent: string }) => {
  const [saving, setSaving] = useAtom(savingAtom);
  const [Showtags, setShowtags] = useState(false);

  return (
    <main className="  pt-10  sohne  " >
      <section className="flex-between gap-4 font-bold    ">
        <section className="flex-center  gap-4 ">
          <Link href={'/'} >
            <Mediumsvg />
          </Link>
          <p className=" text-sm sm:block hidden ">Draft in {currentUserName}</p>
          <p className=" text-sm sohne_bold  ">{saving ?
            <div className=" flex-center gap-2">
              Saving
              <LoadingIcon />
            </div> :
            'Saved'
          }
          </p>
        </section>

        <StoryShadcnDialog storyContent={storyContent} storyID={storyID} username={currentUserName} setShowtags={setShowtags} title="Publish" className=" h-9 px-5 py-2  border hover:border-[#1A8917] hover:text-white hover:bg-[#1A8917]   sohne_bold" />

      </section>


    </main>
  )
}

export default NavbarStory
