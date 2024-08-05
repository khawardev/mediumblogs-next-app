import Mediumsvg from './mediumsvg'

const Loading = () => {
    return (
        <main className='absolute z-50 bg-[#FFFFFF] h-[88vh] w-full flex-center'>
            <Mediumsvg clasName="animate-pulse  " size={30} />
        </main>
    )
}

export default Loading