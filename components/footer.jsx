'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
const Footer =  () => {
  const pathname = usePathname()
  const path = pathname.startsWith('/p') ? false : true;


  return (
    path && (
      <div className="   py-5  border border-r-0 border-b-0 border-l-0 border-black   ">
        <div className="mobile_center   md:flex     whitespace-nowrap md:space-x-7  ">
          <div className="md:flex-center md:flex hidden space-x-7 ">
            <Link className="sohne font-bold text-sm" href="">Press</Link>
            <Link className="sohne font-bold text-sm" href="">Blog</Link>
            <Link className="sohne font-bold text-sm" href="">Teams</Link>
          </div>
          <div className="flex-start   space-x-7 ">
            <Link className="sohne  font-bold text-sm" href="">About</Link>
            <Link className="sohne font-bold text-sm" href="">Help</Link>
            <Link className="sohne font-bold text-sm" href="">Privacy</Link>
            <Link className="sohne font-bold text-sm" href="">Terms</Link>
          </div>
        </div>
      </div>
    )




  )
}

export default Footer