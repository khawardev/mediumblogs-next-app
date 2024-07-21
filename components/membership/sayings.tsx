import Image from "next/image"

const Sayings = () => {
    return (
        <div className="mobile_center flex gap-[120px] py-28">
            <p className=" text-6xl ">What members <br /> are saying</p>
            <section className=" w-1/2 space-y-32 ">
                <section className="flex gap-5">
                    <section>
                        <Image width={300} height={300} className="rounded-full border" alt="img" src={`https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg`} />
                    </section>
                    <section>
                        <p className=" mb-3 text-gray-800">The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.</p>
                        <p className=" sohne   text-base text-gray-900"><span className="sohne_bold">Cassie Kozyrkov, </span> Chief Decision Scientist at Google and Medium member</p>
                    </section>
                </section>

            </section>

        </div>
    )
}

export default Sayings