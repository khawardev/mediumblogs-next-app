import Herosection from "@/components/membership/herosection";
import Plans from "@/components/membership/plans";
import Sayings from "@/components/membership/sayings";
import Whymembership from "@/components/membership/whymembership";
import { Button } from "@/components/ui/button";

const Membership = () => {

    return (
        <main>
            <Herosection />
            <Whymembership />
            <Sayings />
            <Plans />
                <section className="mobile_center py-28 text-center   ">
                <p className=" md:text-7xl text-6xl mb-7">Unlock a world of wisdom</p>
                    <Button className=' sohne  font-bold rounded-full   text-base '>Get started</Button>
                </section>

        </main>
    );
};

export default Membership;
