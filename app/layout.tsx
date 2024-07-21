import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions'
import { Alegreya, Vollkorn } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${vollkorn.className} h-screen flex-between flex-col bg-[#F7F4ED] `}>
          <Header />
          <div className="mobile">
            {children}
          </div>
          <hr className="border border-t-black" />
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
