 'use client'
import Link from "next/link";
import { Button } from "../ui/button";
import Mediumsvg from "../mediumsvg";
import { useState } from "react";
import { savingAtom } from "@/context/atom";
import { useAtom } from "jotai";

const NavbarStory = ( { storyID, currentUserName }: { storyID: string, currentUserName: string }) => {
  const [saving, setSaving] = useAtom(savingAtom);
 
  return (
    <main  >
      <section className="flex-between gap-4 font-bold   sohne ">
        <section className="flex-center  gap-4 ">
          <Link href={'/'} >
            <Mediumsvg />
          </Link>
          <p className=" text-sm sm:block hidden ">Draft in {currentUserName}</p>
          <p className=" text-sm sohne_bold  ">{saving ? 'Saving...' : 'Saved'}</p>
          
       </section>
        <Button variant="green" size="sm" className=" sohne_bold" >Publish</Button>
      </section>



    </main>
  )
}

export default NavbarStory
