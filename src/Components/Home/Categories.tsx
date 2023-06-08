import { BsArrowRightCircleFill } from 'react-icons/bs'

const Categories = ({ values: items, filter }: any) => {
    return (
        <>
            <div id='Menu' className='w-screen pb-12'>
                <div className='leading-normal mt-28 mb-28 '>
                    <a
                        href=''
                        className='block shadow-xl border-t border-b border-gray-600 py-12 px-12 text-center text-primary text-6xl tracking-wide'
                    >
                        Nos Menu
                    </a>
                </div>
                <div className=' container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 my-5'>
                    {items.map((item: string) => {
                        return (
                            <div
                                key={item}
                                className='card w-120 bg-base-600 shadow-xl image-full mx-auto '
                            >
                                <figure>
                                    <img src={'/images/menu2.png'} alt={item} />
                                </figure>
                                <div className='card-body justify-around'>
                                    <h2 className='card-title text-4xl text-primary mx-auto'>
                                        {item}
                                    </h2>
                                    <div className='card-actions justify-center'>
                                        <button
                                            className='animate-wiggle btn btn-circle'
                                            onClick={() => {
                                                filter(item)
                                            }}
                                        >
                                            <BsArrowRightCircleFill className='text-2xl' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Categories
