import Link from "next/link"

const footer = () => {
  return (
    <div className="   py-5  border border-r-0 border-b-0 border-l-0 border-black   ">
      <div className="mobile_center   md:flex    whitespace-nowrap space-x-7  ">
        <div className="md:flex-center md:flex hidden space-x-7 ">
          <Link className="sohne font-bold text-sm" href="">Press</Link>
          <Link className="sohne font-bold text-sm" href="">Blog</Link>
          <Link className="sohne font-bold text-sm" href="">Teams</Link>
        </div>
        <div className="flex-start flex   space-x-7 ">
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