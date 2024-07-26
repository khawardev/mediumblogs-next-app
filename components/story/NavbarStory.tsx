 'use client'
import Link from "next/link";
import { Button } from "../ui/button";
import Mediumsvg from "../mediumsvg";
import { useState } from "react";

const NavbarStory = ( { storyID, currentUserName }: { storyID: string, currentUserName: string }) => {
  const [saving, setSaving] = useState<boolean>(true)

 
  return (
    <main  >
      <section className="flex-between gap-4 font-bold   sohne ">
        <section className="flex-center  gap-4 ">
          <Link href={'/'} >
            <Mediumsvg />
          </Link>
          <p className=" text-sm ">Draft in {currentUserName}</p>
          <p className=" text-sm sohne_bold  ">{saving ? 'Saved' : 'Saving...'}</p>
          
       </section>
        <Button variant="green" size="sm" >Publish</Button>
      </section>



    </main>
  )
}

export default NavbarStory
