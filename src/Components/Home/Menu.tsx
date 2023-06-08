import CardItem from './MenuItem'

const Menu = ({ items }: { items: any }) => {
    const { name, products } = items
    return (
        <>
            <div className='container mx-auto '>
                <div className='text-center mb-12'>
                    <h2 className='font-bold mt-4 pt-12 mb-12  text-5xl text-base-content'>
                        {name}
                    </h2>
                    <p className='text-base-content'>
                        Tous nos {name} originaux sont faits à la main
                        quotidiennement dans notre magasin
                    </p>
                </div>

                <div className='bg-base-200 text-base-content pt-12 pb-12 w-4/6 mx-auto'>
                    {products.map((product: Product) => (
                        <CardItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu
