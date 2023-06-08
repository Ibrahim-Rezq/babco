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
            <div className='bg-base-300 hover:bg-base-100 shadow-xl w-[81%] mx-auto  py-8 mb-8'>
                <div className='px-4 mb-4 flex justify-between items-centers'>
                    <div className='w-1/4'>
                        <img src={'/images/menu2.png'} alt={name} />
                    </div>
                    <div className='w-1/4'>
                        <h5 className=' font-bold'>{name}</h5>
                        <p className='text-lg  mt-2'>
                            Prix:{' '}
                            <span className='text-orange font-bold'>
                                {price} €
                            </span>
                        </p>
                        {itemQuantity && (
                            <p className='text-lg'>
                                Total Items: <span>{itemQuantity}</span>
                            </p>
                        )}
                        <button
                            className=' bg-primary py-2 px-5  mt-3 font-medium  text-lg block text-center rounded-md'
                            onClick={() => {
                                handleAddToCart(product)
                            }}
                        >
                            Ajouter
                        </button>
                    </div>
                    <div className='w-1/4'>
                        <p className='text-4 '>{description}</p>
                    </div>
                </div>
            </div>
            {/* <div key={id} className="w-[28%] rounded-md shadow-xl">
        <div>
          <img src={img} alt={name} />
        </div>
        <div className="p-4">
          <h5 className="text-base font-medium">{name}</h5>
          <p className="text-sm">{description}</p>
          <div className="flex justify-between items-center p-2 mt-4 ">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            <p className="text-lg">
              Prix: <span>{price} €</span>
            </p>
            {itemQuantity && (
              <p className="text-lg">
                Total Items: <span>{itemQuantity}</span>
              </p>
            )}
          </div>
          <button
            className=" bg-rose-400 p-2 mt-4 font-medium w-[28%] text-l block text-center rounded-md text-white "
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Ajouter
          </button>
        </div>
      </div> */}
        </>
    )
}

export default MenuItem
