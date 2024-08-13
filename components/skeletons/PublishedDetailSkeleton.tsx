import { Skeleton } from '@/components/ui/skeleton';

const PublishedDetailSkeleton = () => {
    return (
        <main className=' border-b '>
            <main className="" >
                <section >
                    <Skeleton className="rounded-md border   w-full  md:h-[180px]" />
                </section>
                <div className=" w-full my-5">
                    <section className="flex items-center gap-3 mb-5">
                        <Skeleton className="w-10  h-10 rounded-full" />
                        <section className=' space-y-2'>
                            <Skeleton className="w-32  h-4 rounded" />
                            <Skeleton className="w-24  h-4 rounded" />
                        </section>
                    </section>
                </div>
                <section className='w-full mt-4 space-y-3'>
                    <Skeleton className="w-72  h-4 rounded" />
                    <section className='space-y-2'>
                        <Skeleton className="w-full  h-4 rounded" />
                        <Skeleton className="w-full  h-4 rounded" />
                    </section>
                </section>
                <section className='   flex-between gap-2  w-full  text-sm'>
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

        </main>
    );
};

export default PublishedDetailSkeleton;
