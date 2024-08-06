'use client'
import { DialogButton } from "@/shadcn/Authdialog"
import { PopoverButton } from "@/shadcn/popover"
import { SquarePen } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { CreateStory } from "@/actions/story"
import { useToast } from "@/components/ui/use-toast"
import { FaMedium } from "react-icons/fa6"
import { Button } from "./ui/button"
import { useState } from "react"

const Header = () => {
  const { toast } = useToast()

  const { data, status } = useSession()
  const MakeNewStory = async () => {
    const res = await CreateStory();
    if (res?.error) {
      toast({
        title: res?.error,
      })
    }
  }
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      toast({
        description: 'This feature will be available soon.',
      });
      setInputValue('');
    }
  };
  return (
    <div className=" z-40 fixed   bg-[#FFFFFF] border border-t-0 border-l-0 border-r-0 border-b-black w-full ">
      <div className="mobile_center py-5  flex-between ">
        <section className=" flex-center space-x-7">
          <Link href={'/'} >
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="26" fill="none" viewBox="0 0 120 26" className="au av"><path fill="#000" d="m29.57 1.404.036-.008V1.12h-7.27l-6.75 15.979-6.75-15.98H1.003v.278l.035.008c1.327.302 2 .752 2 2.374v18.993c0 1.623-.676 2.073-2.003 2.374L1 25.153v.279h5.315v-.278l-.035-.008c-1.327-.302-2-.751-2-2.374V4.88l8.67 20.552h.492l8.924-21.125V23.24c-.114 1.282-.782 1.677-1.983 1.95l-.036.009v.275h9.259V25.2l-.036-.008c-1.203-.274-1.886-.67-2-1.95l-.006-19.464h.006c0-1.622.674-2.072 2-2.374m4.23 12.582c.15-3.412 1.367-5.875 3.41-5.918.629.01 1.157.219 1.568.62.872.852 1.282 2.634 1.219 5.298zm-.092.962h10.85v-.046c-.03-2.61-.78-4.64-2.228-6.033-1.25-1.204-3.103-1.867-5.048-1.867h-.043c-1.01 0-2.248.246-3.13.693a7.3 7.3 0 0 0-2.623 2.086c-1.185 1.479-1.903 3.477-2.078 5.724a14 14 0 0 0-.04.755q-.007.292-.001.587C29.484 21.934 32.213 26 37.059 26c4.254 0 6.73-3.132 7.348-7.336l-.312-.11c-1.085 2.259-3.034 3.628-5.252 3.461-3.028-.228-5.347-3.32-5.137-7.066m23.122 6.893c-.356.85-1.099 1.319-2.094 1.319s-1.905-.689-2.552-1.939c-.694-1.342-1.06-3.24-1.06-5.487 0-4.678 1.445-7.704 3.68-7.704.937 0 1.674.468 2.026 1.284zm7.198 3.335c-1.327-.316-2-.787-2-2.492V0l-8.062 2.392v.293l.05-.004c1.111-.09 1.866.064 2.304.472.343.32.51.809.51 1.498v3.11C56.033 7.25 55.088 7 53.94 7c-2.326 0-4.453.987-5.986 2.779-1.599 1.867-2.444 4.42-2.444 7.38 0 5.287 2.584 8.84 6.43 8.84 2.25 0 4.06-1.242 4.888-3.336v2.811h7.233v-.29zM70.94 3.085c0-1.65-1.236-2.896-2.875-2.896-1.632 0-2.908 1.272-2.908 2.896s1.278 2.896 2.908 2.896c1.64 0 2.875-1.245 2.875-2.896m1.903 22.092c-1.327-.316-2-.787-2-2.492h-.006V7.055l-7.234 2.092v.284l.043.004c1.566.14 1.994.683 1.994 2.525v13.515h7.24v-.29zm18.536 0c-1.327-.316-2-.787-2-2.492V7.055L82.49 9.078v.285l.04.004c1.28.136 1.65.71 1.65 2.56v9.88c-.426.85-1.227 1.356-2.196 1.39-1.573 0-2.439-1.07-2.439-3.012V7.055l-7.234 2.092v.284l.044.004c1.565.14 1.994.683 1.994 2.525v8.362a9.4 9.4 0 0 0 .15 1.741l.13.57C75.243 24.845 76.848 26 79.362 26c2.129 0 3.996-1.328 4.818-3.405v2.885h7.233v-.291zm28.102.298v-.291l-.035-.009c-1.44-.334-2.001-.964-2.001-2.248V12.295C117.445 8.98 115.597 7 112.5 7c-2.257 0-4.16 1.314-4.893 3.36-.582-2.168-2.257-3.36-4.734-3.36-2.175 0-3.88 1.156-4.612 3.11V7.056l-7.233 2.006v.286l.043.004c1.547.138 1.994.697 1.994 2.492v13.631h6.75v-.29l-.037-.01c-1.148-.271-1.519-.767-1.519-2.04V10.95c.304-.715.917-1.562 2.127-1.562 1.504 0 2.266 1.05 2.266 3.116v12.972h6.751v-.29l-.035-.01c-1.149-.271-1.52-.767-1.52-2.04V12.294a7 7 0 0 0-.095-1.21c.322-.777.97-1.696 2.23-1.696 1.524 0 2.265 1.02 2.265 3.116v12.972z"></path></svg>
          </Link>
          {status === 'authenticated' &&
            <section className=" md:flex hidden py-[9px] px-3 bg-gray-100 rounded-full  items-center gap-2">
              <span><CiSearch size={20} /></span>
              <input
                className="sohne border-0 text-sm focus:outline-none focus:ring-0  bg-gray-100"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </section>


          }
        </section>


        <ul className="flex-center  gap-5  ">
          {status === 'authenticated' ?
            <div className="flex-center md:space-x-7 space-x-3">

              <button onClick={MakeNewStory} className="flex-center gap-1   text-gray-500 ">
                <SquarePen strokeWidth={1.25} size={18} />
                <p className=" text-base   sohne">Write</p>
              </button>
              <Link href="/blogs" className="flex-center gap-1 text-gray-500 ">
                <FaMedium strokeWidth={1.25} size={20} />
                <p className=" text-base  sohne">Blogs</p>
              </Link>
              <PopoverButton />
            </div>

            :
            <li className="flex-center sohne  md:gap-7 gap-3">
              <Link className="md:block hidden  font-bold text-sm" href="/about">Our story</Link>
              <Link className="md:block hidden   font-bold text-sm" href="/membership">Membership</Link>
              <DialogButton className='flex-center gap-1 font-bold rounded-full ' title='Sign in' content='Create an account to start writing.' />
              <div className=" md:hidden block">
                <PopoverButton />
              </div>
            </li>
          }


        </ul>
      </div>

    </div>
  )
}

export default Header


