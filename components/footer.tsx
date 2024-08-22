'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from 'next/navigation'
const Footer = () => {
  const pathname = usePathname();
  const path = pathname.startsWith('/p') || pathname.startsWith('/blogs') ? false : true;
  const { status } = useSession()

  return (
    path &&
    <div className="   py-5  border border-r-0 border-b-0 border-l-0 border-black   ">
      <div className="mobile_center   md:flex items-center     whitespace-nowrap md:space-x-7  ">
        {status === 'authenticated' && (
          <div className="md:flex-center md:flex hidden space-x-4 ">
            <Link className="sohne font-bold text-sm " href="/blogs">Blogs</Link>
            <Link className="sohne font-bold text-sm " href="/blogs">Profile</Link>
            <Link className="sohne  font-bold text-sm " href="about">Our Story</Link>
            <Link className="sohne font-bold text-sm " href="membership">Membership</Link>
          </div>
        )}
        <div className="flex-between md:flex-row-reverse  md:w-full">
          <div className=" select-none flex-center  gap-1">
            <p className=" sohne_bold  font-bold"><span className=" text-muted-foreground">By</span> <Link className='underline' target="_blank" href={'https://khawarsultan.vercel.app/'} >Khawar Sultan</Link> </p>
            <Image className=" sm:block hidden " src={'https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx'} alt='s' width={30} height={100} />
          </div>
          <Image className=" sm:hidden block  " src={'https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx'} alt='s' width={30} height={100} />
        </div>
      </div>
    </div>
  )




}

export default Footer