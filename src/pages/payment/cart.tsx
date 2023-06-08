import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { useCart } from '../../Context/useCart'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Cart = () => {
    const {
        cart,
        total,
        removeItemFromCart,
        decreaseItem,
        addItemToCart,
        clearCart,
    } = useCart()

    const handleRemoveItemFromCart = (product: Product[]) => {
        removeItemFromCart(product)
    }
    const handleDecreaseCart = (product: Product[]) => {
        decreaseItem(product)
    }

    const handleIncreaseCart = (product: Product) => {
        addItemToCart(product)
    }
    const handleClearCart = () => {
        clearCart({})
    }

    // const navigate = useRouter()
    // const routeChange = () => {
    //     const path = `/checkout`
    //     navigate.push(path)
    // }
    return (
        <div className='bg-[#2925251f]'>
            <div>
                <div
                    className='relative overflow-hidden bg-no-repeat bg-cover'
                    style={{
                        backgroundPosition: '50%',
                        backgroundImage: `url(${'/images/cart_bg.webp'})`,
                        height: '300px',
                        marginTop: '-2rem',
                    }}
                ></div>

                <div className='container mx-auto px-6 md:px-12 xl:px-32'>
                    <div className='text-center text-gray-800'>
                        <div
                            className='block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12'
                            style={{
                                margin: 'auto',
                                width: '40%',
                                marginTop: '-140px',
                                background: 'hsla(0, 0%, 100%, 0.7)',
                                backdropFilter: 'blur(30px)',
                                padding: '4rem 2rem',
                            }}
                        >
                            <h1 className='text-[#c64905] text-[1.9rem] mb-[1rem]'>
                                Délicieux repas, livrés pour vous.
                            </h1>
                            <p className='text-[ #4b4646] text-[1rem] '>
                                Tous nos repas sont préparés avec des
                                ingrédients de haute qualité, à temps et bien
                                sûr par des chefs expérimentés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[70px] min-h-[70vh]'>
                <div className='w-[70%] bg-white border rounded-sm mx-auto p-6 '>
                    {cart.length === 0 ? (
                        <div className='flex'>
                            <p className='mr-3'>
                                Votre panier est vide .Commancez votre commandes
                            </p>
                            <Link href='/' style={{ color: 'blue' }}>
                                Accueille
                            </Link>
                        </div>
                    ) : (
                        <div>
                            {cart?.map((product: any) => (
                                <div
                                    key={product.name}
                                    className='flex justify-between items-center border-b-2 border-slate-100 pb-4 mb-4'
                                >
                                    <div>
                                        <h3 className='text-black font-bold mb-[.5rem] capitalize'>
                                            {product.name}
                                        </h3>
                                        <p className='italic text-[#16030396] text-[.9rem]'>
                                            {product.description}
                                        </p>
                                        <span className='text-[#7B0000] font-bold'>
                                            22.25{' '}
                                            <span className='text-[black]'>
                                                {' '}
                                                €
                                            </span>
                                        </span>
                                    </div>
                                    <div className='text-center'>
                                        <div className='flex items-center'>
                                            <button
                                                className='mr-[.5rem]'
                                                onClick={() =>
                                                    handleDecreaseCart(product)
                                                }
                                            >
                                                <AiOutlineMinusCircle
                                                    size='1.3rem'
                                                    color='blue'
                                                    fill='orange'
                                                />
                                            </button>

                                            <div className='font-bold text-base border-2 border-[#e2d8d8] py-[.3rem] px-[1rem]'>
                                                {product.itemQuantity}
                                            </div>

                                            <button
                                                className='ml-[.5rem]'
                                                onClick={() =>
                                                    handleIncreaseCart(product)
                                                }
                                            >
                                                <AiOutlinePlusCircle
                                                    size='1.3rem'
                                                    color='blue'
                                                    fill='orange'
                                                />
                                            </button>
                                        </div>
                                        <button
                                            className='bg-warning mt-4 text-white py-2 px-3 rounded-md'
                                            onClick={() =>
                                                handleRemoveItemFromCart(
                                                    product
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <div className='flex justify-between  items-center mt-4'>
                                    <button
                                        className='mb-4 bg-error py-2 px-3 rounded-md'
                                        onClick={() => handleClearCart()}
                                    >
                                        Tout effacer
                                    </button>
                                    <div className='text-slate-700 text-lg'>
                                        Total :{' '}
                                        <span className='text-primary-focus font-bold'>
                                            {total}
                                        </span>
                                    </div>
                                </div>
                                <div className='text-center mt-4'>
                                    <Link
                                        href='/payment/checkout/pre'
                                        className=' bg-info py-5 px-6 rounded-md'
                                    >
                                        Finaliser la commande
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
