import Link from 'next/link'
import { BsMedium } from 'react-icons/bs'

export default function NotFound() {
    return (
        <div className='sohne mobile_center space-y-4 sm:h-[81.9vh] h-[80vh] flex-center flex-col'>
            <BsMedium size={70} className='text-[#891717]' />
            <p className=' sohne_bold text-3xl  '>404 - Page Not Found</p>
            <Link href="/" className='sohne_bold'>Return Home</Link>
        </div>
    )
}