'use client'
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react"
import { Link } from 'next-view-transitions'
import { DialogButton } from "@/shadcn/Authdialog";
import { Vollkorn } from 'next/font/google'
import { FlipWords } from "@/components/ui/flip-words";
import Globe from "@/components/magicui/globe";

const vollkorn = Vollkorn({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-vollkorn",
})
export default function Home() {
  const { status } = useSession()
  const words = ["ideas", "concepts", "theories"];
  return (
    <main className={`mobile_right flex-between md:h-auto ${status === 'authenticated' ? 'h-[74vh]' : 'h-[79vh]'}  `}   >
      <section>
        <section className={` ${vollkorn.className} lg:text-[110px]  md:text-8xl text-7xl  text-[#242424] leading-[0.9] tracking-tight`}>
          Human <br /> stories & <br className=" sm:hidden block" /> <FlipWords words={words} />
        </section>
        <p className="sohne font-bold text-[#242424] md:text-2xl text-xl mb-10 md:mt-0 mt-6">
          A place to read, write, and deepen your understanding
        </p>
        {status === 'authenticated' ?
          <>
            <Link href={'/blogs'}>
              <Button size={'lg'} variant={'green'} className="sohne  font-bold rounded-full text-lg">
                Start Reading
              </Button>
            </Link>
          </>
          :
          <>
            <DialogButton size={'lg'} title='Start Reading' className={'sohne  font-bold rounded-full text-lg '} content='Create an account to start writing.' />
          </>
        }

      </section>
      <section className="lg:flex hidden ">
        <Globe />
      </section>
    </main>


  );
}
