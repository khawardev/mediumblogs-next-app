import { getStoriesByUserId } from "@/actions/story";
import StoryDetails from "@/components/blogs/story/StoryDetails";
import { Button } from "@/components/ui/button"

const page = async ({ params }: { params: { userId: string } }) => {
    const userPublishedStories: any = await getStoriesByUserId(params?.userId, true);
    console.log(userPublishedStories, 'userPublishedStories');


    return (
        <div className=" mobile_center_less_contract md:py-12 py-8">

            <section className=" flex-between mb-9">
                <p className=" md:text-5xl text-3xl sohne_bold">Your Stories</p>
                <Button className=" sohne font-bold" variant={'green'} size='sm'>New Story +</Button>
            </section>

            <section className=" flex gap-10 mb-[11px] sohne ">
                <section className="  flex-center gap-2">
                    <button className=" hover:underline underline-offset-[16px] decoration-2 ">published</button>
                    <Button size={'iconxs'} className=" font-bold text-xs">2</Button>
                </section>
                <section className="  flex-center gap-2">
                    <button className=" hover:underline underline-offset-[16px] decoration-2 ">drafts</button>
                    <Button size={'iconxs'} className=" font-bold text-xs">2</Button>
                </section>
                <section className="  flex-center gap-2">
                    <button className=" hover:underline underline-offset-[16px] decoration-2 ">saved</button>
                    <Button size={'iconxs'} className=" font-bold text-xs">2</Button>
                </section>

            </section>
            <hr />
            {!userPublishedStories ? 'loading ...' :
                <section>
                    {userPublishedStories?.map((story: any, index: number) => (
                        <StoryDetails key={index} story={story} />
                    ))}
                </section>
            }

        </div>
    )
}

export default page