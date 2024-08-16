import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BsMedium } from 'react-icons/bs'

export default function NotFound() {
    return (
        <div className=' mobile_center text-center space-y-5 sm:h-[81.9vh] h-[70vh] flex-center flex-col'>
            <BsMedium size={70} />
            <p className='  sm:text-3xl text-2xl    '>404 - page not found</p>
            <Link href="/" className='sohne_bold'>
                <Button className='bulger' variant={'outline'}>Return Home</Button>
            </Link>
        </div>
    )
}