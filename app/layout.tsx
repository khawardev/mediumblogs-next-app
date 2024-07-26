import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions'
import { Alegreya, Vollkorn } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AuthProvider from "@/lib/AuthProvider";
import { Toaster } from "@/components/ui/toaster"
import PathnameProvider from "@/components/pathnameProvider";

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
})
const vollkorn = Vollkorn({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-vollkorn",
})


export const metadata: Metadata = {
  title: "Medium - Where good ideas find you.",
  description: "Medium - Where good ideas find you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = <PathnameProvider url={'/about'} />
  console.log('path ------ ',path);

  return (
    // <ViewTransitions> </ViewTransitions>
    <html lang="en">
      <AuthProvider >
        <body className={`${vollkorn.className}  bg-[#FFFFFF]`}>
          <Header />
          <div className=" pt-[77px]  pb-0">
            {children}
            <Toaster />
          </div>
          {path && <Footer />}
        </body>
      </AuthProvider >
    </html>
  );
}
