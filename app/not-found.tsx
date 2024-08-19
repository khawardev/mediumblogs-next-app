import { BsMedium } from 'react-icons/bs'
export default function NotFound() {
    return (
        <div className=' mobile_center text-center space-y-5 sm:h-[81.9vh] h-[70vh] flex-center flex-col'>
            <BsMedium size={60} />
            <p className='  sm:text-3xl text-2xl sohne_bold    '>404 • Page not Found</p>
        </div>
    )
}