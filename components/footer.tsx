'use client'
import Image from "next/image";
import Link from "next/link"
import { usePathname } from 'next/navigation'
const Footer = () => {
  const pathname = usePathname();
  const path = pathname.startsWith('/p') || pathname.startsWith('/blogs') ? false : true;

  return (
    path && (
      <div className="   py-5  border border-r-0 border-b-0 border-l-0 border-black   ">
        <div className="mobile_center   md:flex items-center     whitespace-nowrap md:space-x-7  ">
          <div className="md:flex-center md:flex hidden space-x-7 ">
            <Link className="sohne font-bold text-sm" href="">Press</Link>
            <Link className="sohne font-bold text-sm" href="">Blog</Link>
            <Link className="sohne font-bold text-sm" href="">Teams</Link>
          </div>
          <div className="flex-start md:flex hidden   space-x-7 ">
            <Link className="sohne  font-bold text-sm" href="">About</Link>
            <Link className="sohne font-bold text-sm" href="">Help</Link>
            <Link className="sohne font-bold text-sm" href="">Privacy</Link>
            <Link className="sohne font-bold text-sm" href="">Terms</Link>
          </div>
          <div className="flex flex-row-reverse  w-full">
            <div className=" select-none flex-center gap-1">
              <p className=" sohne_bold  font-bold"><span className=" text-muted-foreground">By</span> Khawar Sultan</p>
              <Image src={'https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx'} alt='s' width={30} height={100} />
            </div>
          </div>
        </div>
      </div>
    )




  )
}

export default Footer