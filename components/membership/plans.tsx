import { CardWithForm } from "@/shadcn/card"
import Image from "next/image"
import { FaHeart } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdOutlineCheck } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { FaShieldHeart } from "react-icons/fa6";

const Plans = () => {
    return (
        <main className="border border-r-0 border-t-0 border-l-0 border-black">
            <div className="mobile_center xl:flex gap-36 py-28 lg:space-y-0 space-y-14 ">
                <p className=" text-6xl ">Membership <br /> plans</p>
                <section className=" xl:w-[60%]  space-y-14 ">
                    <section className="text-center">
                        <p className="text-2xl sohne">Be part of a better internet.</p>
                        <p className="text-2xl sohne">Get 20% off membership for a limited time.</p>
                    </section>
                    <section className="md:flex gap-10 sohne md:space-y-0 space-y-10">
                        <CardWithForm >
                            <section className="p-8 space-y-8">
                                <div className="space-y-5 flex flex-col text-center">
                                    <div className=" flex justify-center">
                                        <PiStarFourFill className="text-3xl text-yellow-500 " />
                                    </div>
                                    <div >
                                        <p className="text-2xl sohne_bold">Medium Member</p>
                                        <p className="text-lg ">5 usd /month or 60 usd /year</p>
                                    </div>
                                    <Button size={"sm"} variant={"green"} className="sohne_bold"> Get Started </Button>
                                </div>
                                <ul className="flex flex-col items-start space-y-4 text-gray-700">
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Read member-only stories</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Support writers you read most</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Earn money for your writing</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Listen to audio narrations</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Read offline with the Medium app</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Access our Mastodon community</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Connect your custom domain</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Create your own publications</li>
                                </ul>
                            </section>
                        </CardWithForm>
                        <CardWithForm >
                            <section className="p-8 space-y-8">
                                <div className="space-y-5 flex flex-col text-center">
                                    <div className=" flex justify-center">
                                        <FaShieldHeart className="text-3xl text-yellow-500 " />
                                    </div>
                                    <div >
                                        <p className="text-2xl sohne_bold">Medium Member</p>
                                        <p className="text-lg ">5 usd /month or 60 usd /year</p>
                                    </div>
                                    <Button size={"sm"} variant={"green"} className="sohne_bold"> Get Started </Button>
                                </div>
                                <ul className="flex flex-col items-start space-y-4 text-gray-700">
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Read member-only stories</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Support writers you read most</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Earn money for your writing</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Listen to audio narrations</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Read offline with the Medium app</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Access our Mastodon community</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Connect your custom domain</li>
                                    <li className="flex items-center gap-3"><MdOutlineCheck className="self-center text-green-600" />Create your own publications</li>
                                </ul>
                            </section>
                        </CardWithForm>
                    </section>
                </section>

            </div>
        </main>
    )
}

export default Plans