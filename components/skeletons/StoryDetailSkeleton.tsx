import { Skeleton } from '@/components/ui/skeleton';

const StoryDetailSkeleton = () => {
    return (
        <main className=' sm:px-5  py-8  border-b  w-full'>
            <main className="flex-between items-center   sm:gap-10 gap-5 " >
                <div className=" w-full">
                    <section className="flex items-center gap-3 mb-5">
                        <Skeleton className="w-10 h-10 rounded-full" />
                        <section className=' space-y-2'>
                            <Skeleton className="w-32 h-4 rounded" />
                            <Skeleton className="w-24 h-4 rounded" />
                        </section>
                    </section>
                    <section className="sm:space-y-3 space-y-1">
                        <Skeleton className="w-[80%] h-4 rounded mb-5" />
                        <Skeleton className="w-full h-4 rounded" />
                        <Skeleton className="w-full h-4 rounded " />
                    </section>
                    <section className=' sm:flex hidden flex-between gap-2  w-full  text-sm'>
                        <section className='mt-4  flex items-center gap-3'>
                            <Skeleton className="w-36  h-[25px] rounded-full" />
                            <Skeleton className="w-36 h-[25px] rounded-full" />
                            <Skeleton className="w-12 h-[25px] rounded-full" />
                        </section>
                        <div className="flex-center gap-3 mt-4">
                            <Skeleton className="w-6 h-6 rounded-full" />
                            <Skeleton className="w-6 h-6 rounded-full" />
                        </div>
                    </section>
                </div>
                <section className='w-[50%]'>
                    <Skeleton className=" w-full md:h-48 h-20 rounded" />
                </section>
            </main>
            <section className=' sm:hidden flex  flex-between gap-2  w-full  text-sm'>
                <section className='mt-4  flex items-center gap-3'>
                    <Skeleton className="w-36  h-[25px] rounded-full" />
                    <Skeleton className="w-12 h-[25px] rounded-full" />
                </section>
                <div className="flex-center gap-3 mt-4">
                    <Skeleton className="w-6 h-6 rounded-full" />
                    <Skeleton className="w-6 h-6 rounded-full" />
                </div>
            </section>
        </main>
    );
};

export default StoryDetailSkeleton;
