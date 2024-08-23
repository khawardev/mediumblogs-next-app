import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AuthProvider from "@/extras/AuthProvider";
import { Toaster } from "@/components/ui/toaster"
import { ThemeModeScript } from "flowbite-react";

export const metadata: Metadata = {
  title: "Medium - Where good ideas find you.",
  description: "Medium - Where good ideas find you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" >
        <AuthProvider >
          <head>
            <ThemeModeScript />
          </head>
          <body className={`min-h-screen flex flex-col flex-between  w-full  bg-[#FFFFFF]`}>
            <Header headerClasses={'z-40 fixed'} />
            <Header headerClasses={''} />
            <div className=" flex-grow w-full flex  ">
              {children}
              <Toaster />
            </div>
            <div className=" w-full">

              <Footer />
            </div>
          </body>
        </AuthProvider >
      </html>
    </ViewTransitions >
  );
}
