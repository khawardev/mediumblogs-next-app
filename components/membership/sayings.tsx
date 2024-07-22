import Image from "next/image"

const Sayings = () => {
    return (
        <main className="border border-r-0 border-t-0 border-l-0 border-black">
            <div className="mobile_center lg:flex gap-[105px] py-28 lg:space-y-0 space-y-14">
                <p className=" lg:text-6xl text-5xl">What members <br /> are saying</p>
                <section className=" lg:w-1/2 md:space-y-22 space-y-20 ">
                    <section className="lg:flex gap-5 lg:space-y-0 space-y-5 ">
                        <section >
                            <Image width={300} height={300} className="rounded-full border lg:w-[300px] md:w-[100px] w-[80px] " alt="img" src={`https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg`} />
                        </section>
                        <section>
                            <p className=" mb-3 text-gray-800 md:text-2xl text-lg">The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.</p>
                            <p className=" sohne   text-base text-gray-900"><span className="sohne_bold">Cassie Kozyrkov, </span> Chief Decision Scientist at Google and Medium member</p>
                        </section>
                    </section>
                    <section className="lg:flex gap-5 lg:space-y-0 space-y-5 ">
                        <section >
                            <Image width={300} height={300} className="rounded-full border lg:w-[300px] md:w-[100px] w-[80px] " alt="img" src={`https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg`} />
                        </section>
                        <section>
                            <p className=" mb-3 text-gray-800 md:text-2xl text-lg">The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.</p>
                            <p className=" sohne   text-base text-gray-900"><span className="sohne_bold">Cassie Kozyrkov, </span> Chief Decision Scientist at Google and Medium member</p>
                        </section>
                    </section>
                    

                </section>

            </div>
        </main>
    )
}

export default Sayings