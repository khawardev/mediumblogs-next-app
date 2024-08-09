import { Skeleton } from '@/components/ui/skeleton';

const TopicsSkeleton = () => {
    return (
        <section className="flex items-center gap-5 ">
            <Skeleton className="w-7 h-7 rounded-full" />
            <section className='flex-center   justify-start gap-4'>
                <Skeleton className="w-14 h-4 rounded" />
                <Skeleton className="w-32 h-4 rounded" />
                <Skeleton className="w-32 h-4 md:block hidden rounded" />
                <Skeleton className="w-32 h-4 md:block hidden rounded" />
                <Skeleton className="w-14 h-4 md:hidden block  rounded" />
            </section>
        </section>
    );
};

export default TopicsSkeleton;
