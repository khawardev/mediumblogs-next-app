import Image from "next/image"
import data from '@/data/sayings.json'; // Adjust the path based on your file structure

const Sayings = () => {
    return (
        <main className="border border-r-0 border-t-0 border-l-0 border-black">
            <div className="mobile_center lg:flex gap-[105px] py-28 lg:space-y-0 space-y-14">
                <p className=" lg:text-6xl text-5xl">What members <br /> are saying</p>
                <section className=" lg:w-1/2 md:space-y-22 space-y-20 ">
                    {data?.map((item, Index) => (
                        <section key={Index} className="lg:flex lg:items-start lg:justify-center gap-5 lg:space-y-0 space-y-5 ">
                            <Image width={65} height={65} className="rounded-full border " alt="img" src={item.imgurl} />
                            <div>

                                <p className=" mb-3 text-gray-800 md:text-2xl text-lg">{item.sayings}</p>
                                <p className=" sohne   text-base text-gray-900"><span className="sohne_bold">{item.name} </span> {item.designation}</p>
                            </div>
                        </section>
                    ))}
                </section>

            </div>
        </main>
    )
}

export default Sayings