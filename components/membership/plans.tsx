import { CardWithForm } from "@/shadcn/card"
import { Button } from "../ui/button";
import { MdOutlineCheck } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { FaShieldHeart } from "react-icons/fa6";
import plans from '@/data/plans.json'; // Adjust the path based on your file structure

const Plans = () => {
    return (
        <main className="border border-r-0 border-t-0 border-l-0 border-black">
            <div className="mobile_center xl:flex gap-36 py-28 lg:space-y-0 space-y-14 ">
                <p className=" lg:text-6xl text-5xl ">Membership <br /> plans</p>
                <section className=" xl:w-[60%]  space-y-14 ">
                    <section className="text-center">
                        <p className="text-2xl sohne">Be part of a better internet.</p>
                        <p className="text-2xl sohne">Get 20% off membership for a limited time.</p>
                    </section>
                    <section className="md:flex gap-10 sohne md:space-y-0 space-y-10">
                        {plans?.map((plan, index) => (
                            <CardWithForm key={index}>
                                <section className="p-8 space-y-8">
                                    <div className="space-y-5 flex flex-col text-center border-b pb-5">
                                        <div className="flex justify-center">
                                            {index === 0 ? (
                                                <PiStarFourFill className="text-3xl text-yellow-500" />
                                            ) : (
                                                <FaShieldHeart className="text-3xl text-yellow-500" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-2xl sohne_bold">{plan.title}</p>
                                            <p className="text-lg">{plan.pkg}</p>
                                        </div>
                                        <Button size={"sm"} variant={"green"} className="sohne_bold">
                                            Get Started
                                        </Button>
                                    </div>
                                    <ul className="flex flex-col items-start space-y-4 text-gray-700">
                                        {plan.pros?.map((pro, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <MdOutlineCheck className="self-center text-green-600" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </CardWithForm>
                        ))}
                    </section>
                </section>

            </div>
        </main>
    )
}

export default Plans