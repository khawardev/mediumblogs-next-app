'use client';
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";
import { DialogButton } from "@/shadcn/dialog";

export default function Home() {
  const { data, status } = useSession()
  console.log(data);
  console.log(status);

  return (
    <main className="flex-between md:h-[615px] h-[560px] mobile_right">
      <section>
        <p className="lg:text-9xl md:text-8xl text-7xl  text-[#242424] leading-[0.9] tracking-tight">
          Human <br /> stories & ideas
        </p>
        <p className="sohne text-[#242424] md:text-2xl text-xl mb-10 md:mt-0 mt-6">
          A place to read, write, and deepen your understanding
        </p>

        {/* {session && session.user ?
          <>
            {session.user.email} <Image className=" rounded-full" width={50} height={50} src={session.user.image || ''} alt={session.user.name || ''} />
            <Button variant={'destructive'} onClick={() => signOut()} className="sohne md:flex hidden font-bold rounded-full text-lg ">
              Sign out
            </Button>
          </>

          :
          <Button onClick={() => signIn("google")} className="sohne md:flex hidden font-bold rounded-full text-lg ">
            Sign in
          </Button>
        } */}

        {status === 'authenticated' ?
          <>
            <Button size={'lg'} className="sohne md:flex hidden font-bold rounded-full text-lg ">
              <Link href={'/blogs'}> Start reading</Link>
            </Button>
            <Button size={'lg'} variant={'green'} className="sohne md:hidden flex font-bold rounded-full text-lg">
              <Link href={'/blogs'}> Start reading</Link>
            </Button>
          </>
          :
          <>
            <Button size={'lg'} className="sohne md:flex hidden font-bold rounded-full text-lg ">
              <DialogButton title='Start Reading' content='Create an account to start reading.' />
            </Button>
            <Button size={'lg'} variant={'green'} className="sohne md:hidden flex font-bold rounded-full text-lg">
              <DialogButton title='Start Reading' content='Create an account to start reading.' />
            </Button>
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
