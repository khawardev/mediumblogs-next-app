/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-between  sm:py-[126px] py-[106px] ">
      <div>
        <p className="lg:text-9xl md:text-8xl text-7xl  text-[#242424] leading-[0.9] tracking-tight">
          Human <br /> stories & ideas
        </p>
        <p className="sohne text-[#242424] md:text-2xl text-xl mb-10 md:mt-0 mt-6">
          A place to read, write, and deepen your understanding
        </p>
        <Button className="sohne md:flex hidden font-bold rounded-full text-lg shadow-lg">
          Start reading
        </Button>
        <Button variant={'green'} className="sohne md:hidden flex font-bold rounded-full text-lg shadow-lg">
          Start reading
        </Button>
      </div>
      <div className="absolute  md:right-0  -right-20   lg:flex hidden ">
        <Image
          alt="medium hero image"
          src={"https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"}
          width={450}
          height={450}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."
        />
      </div>
    </div>
  );
}
