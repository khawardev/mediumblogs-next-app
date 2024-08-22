'use client'
import Herosection from "@/components/membership/herosection";
import Plans from "@/components/membership/plans";
import Sayings from "@/components/membership/sayings";
import Whymembership from "@/components/membership/whymembership";
import { Button } from "@/components/ui/button";
import { DialogButton } from "@/shadcn/Authdialog";
import { useSession } from "next-auth/react";
import { Vollkorn } from 'next/font/google'
import Link from "next/link";

const vollkorn = Vollkorn({
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-vollkorn",
})
const Membership = () => {
    const { status } = useSession()

    return (
        <main>
            <Herosection />
            <Whymembership />
            <Sayings />
            <div id="plans" >
                <Plans />
            </div>
            <section className="mobile_center py-28 text-center   ">
                <p className={`md:text-6xl text-4xl mb-7 ${vollkorn.className}`}>Unlock a world of wisdom</p>

                {status === 'authenticated' ?
                    <>
                        <Link href={'/blogs'}>
                            <Button variant={'green'} className="sohne  font-bold rounded-full ">
                                Start Exploring
                            </Button>
                        </Link>
                    </>
                    :
                    <>
                        <DialogButton title='Get started' className={'sohne  font-bold rounded-full  '} content='Create an account to' />
                    </>
                }
            </section>
        </main>
    );
};

export default Membership;
