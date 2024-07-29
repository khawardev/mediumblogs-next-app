'use client'
import Link from "next/link";
import Mediumsvg from "../mediumsvg";
import { useState } from "react";
import { savingAtom } from "@/context/atom";
import { useAtom } from "jotai";
import { StoryShadcnDialog } from "@/components/story/StoryShadcnDialog";


export const svg = () => {
  return (
    <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
      <circle
        className="opacity-10"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1"
      ></circle>
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

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
              {svg()}
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
