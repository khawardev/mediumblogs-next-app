import { Button } from "@/components/ui/button"
import Link from "next/link"

const footer = () => {
  return (
    <div className=" border  py-5 border-t-black w-full border-b-0 border-l-0 border-r-0   ">
      <div className="mobile_center   md:flex  gap-7  whitespace-nowrap  ">
        <div className="md:flex-center md:flex hidden gap-7 ">
          <Link className="sohne font-bold text-sm" href="">Press</Link>
          <Link className="sohne font-bold text-sm" href="">Blog</Link>
          <Link className="sohne font-bold text-sm" href="">Teams</Link>
        </div>
        <div className="flex-start flex  gap-7 ">
          <Link className="sohne  font-bold text-sm" href="">About</Link>
          <Link className="sohne font-bold text-sm" href="">Help</Link>
          <Link className="sohne font-bold text-sm" href="">Privacy</Link>
          <Link className="sohne font-bold text-sm" href="">Terms</Link>
        </div>

      </div>
    </div>

  )
}

export default footer