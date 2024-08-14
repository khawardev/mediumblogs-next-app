import data from '@/data/whymembership.json'; // Adjust the path based on your file structure

const Whymembership = () => {
    return (
        <main className="border border-r-0 border-t-0 border-l-0 border-black">
            <div className="mobile_center lg:flex gap-36 lg:py-28 py-16  lg:space-y-0 space-y-14">
                <p className=" lg:text-5xl text-4xl ">Why <br /> membership?</p>
                <section className=" lg:w-1/2 lg:space-y-24 space-y-20">
                    {data?.map((item, Index) => (
                        <section key={Index}>
                            <p className="text-3xl mb-4">{item.title}</p>
                            <p className=" sohne   lg:text-lg text-base  text-muted-foreground">{item.desc}</p>
                        </section>
                    ))}
                </section>
            </div>
        </main>

    )
}

export default Whymembership