import { Skeleton } from '@/components/ui/skeleton';

const SidebarSkeleton = () => {
    return (
        <section className=" items-center gap-5 ">
            <Skeleton className="w-32 h-5 rounded mb-7" />
            <section className="flex  gap-3 mb-5">
                <Skeleton className="w-10 h-10 rounded-full" />
                <section className=' space-y-2'>
                    <Skeleton className="w-40 h-4 rounded mb-3" />
                    <Skeleton className="w-60 h-4 rounded" />
                    <Skeleton className="w-60 h-4 rounded" />
                </section>
            </section>
            <section className="flex  gap-3 mb-5">
                <Skeleton className="w-10 h-10 rounded-full" />
                <section className=' space-y-2'>
                    <Skeleton className="w-40 h-4 rounded mb-3" />
                    <Skeleton className="w-60 h-4 rounded" />
                    <Skeleton className="w-60 h-4 rounded" />
                </section>
            </section>
            <section className="flex  gap-3 mb-5">
                <Skeleton className="w-10 h-10 rounded-full" />
                <section className=' space-y-2'>
                    <Skeleton className="w-40 h-4 rounded mb-3" />
                    <Skeleton className="w-60 h-4 rounded" />
                    <Skeleton className="w-60 h-4 rounded" />
                </section>
            </section>
            <Skeleton className="w-24 h-4 rounded mb-10" />
            <section>
                <Skeleton className="w-[295px] h-60 rounded-lg " />
            </section>
        </section>
    );
};

export default SidebarSkeleton;
