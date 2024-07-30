'use client';
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";
import { DialogButton } from "@/shadcn/Authdialog";
import { Vollkorn } from 'next/font/google'

const vollkorn = Vollkorn({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-vollkorn",
})
export default function Home() {
  const { data, status } = useSession()
  console.log(data);
  console.log(status);

  return (
    <main className="flex-between md:h-[615px] h-[560px] mobile_right">
      <section>
        <p className={` ${vollkorn.className} lg:text-9xl md:text-8xl text-7xl  text-[#242424] leading-[0.9] tracking-tight`}>
          Human <br /> stories & ideas
        </p>
        <p className="sohne text-[#242424] md:text-2xl text-xl mb-10 md:mt-0 mt-6">
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
      <section className="  lg:flex hidden ">
        <Image
          alt="medium hero image"
          src={"https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"}
          width={450}
          height={450}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."
        />
      </section>
    </main>
  );
}
