//import { AiOutlineStar } from 'react-icons/ai'
import { useCart } from '../../Context/useCart'
const MenuItem = (props: any) => {
    const { product } = props
    const { id, name, description, price, itemQuantity } = product

    const { addItemToCart } = useCart()

    const handleAddToCart = (product: Product) => {
        addItemToCart(product)
    }
    return (
        <>
            <div className='shadow-xl text-white mx-auto my-6'>
                <div className='card card-side bg-base-100 shadow-xl'>
                    <figure className='max-w-[40%]'>
                        <img src='/images/menu2.png' alt='Movie' />
                    </figure>
                    <div className='card-body'>
                        <div>
                            <h2 className='card-title'>{name}</h2>
                            <p className=''>
                                Prix:{' '}
                                <span className='text-orange font-bold'>
                                    {price} €
                                </span>
                            </p>
                        </div>
                        <p>{description}</p>
                        <button
                            className='btn'
                            onClick={() => {
                                handleAddToCart(product)
                            }}
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem
