import "./globals.css";
import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions'
import { Alegreya } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
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
        <body className={`${alegreya.className} sm:w-10/12 m-auto px-5 `}>
          <Header />
          {children}
          <Footer />


        </body>
      </html>
    </ViewTransitions>
  );
}
