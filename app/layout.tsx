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
          <body className={`min-h-screen md:grid md:grid-rows-[auto,1fr,auto] bg-[#FFFFFF]`}>
            <Header headerClasses={'z-40 fixed'} />
            <Header headerClasses={''} />
            <div className="relative">
              {children}
              <Toaster />
            </div>
            <Footer />
          </body>
        </AuthProvider >
      </html>
    </ViewTransitions >
  );
}
