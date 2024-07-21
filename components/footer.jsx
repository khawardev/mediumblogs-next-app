import { Button } from "@/components/ui/button"
import Link from "next/link"

const footer = () => {
  return (
    <div className=" border  border-t-black w-full   ">
      <div className="mobile  py-5  md:flex  gap-3  whitespace-nowrap  ">
        <div className="md:flex-center md:flex hidden gap-7 ">
          <Link className="sohne font-bold text-sm " href="">Status</Link>
          <Link className="sohne font-bold text-sm" href="">Careers</Link>
          <Link className="sohne font-bold text-sm" href="">Press</Link>
          <Link className="sohne font-bold text-sm" href="">Blog</Link>
          <Link className="sohne font-bold text-sm" href="">Text to speech</Link>
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