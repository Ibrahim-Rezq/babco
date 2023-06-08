import CardItem from './MenuItemNew'

const Menu = ({ items }: { items: any }) => {
    const { name, products } = items
    return (
        <>
            <div className='collapse collapse-arrow rounded-none mb-4 shadow-xl border-t border-t-stone-700'>
                <input type='radio' name='my-accordion-2' />
                <div className='collapse-title text-xl text-center text-primary font-semibold'>
                    {name}
                </div>
                <div className='collapse-content'>
                    <div className='pt-12 pb-12 w-4/6 mx-auto'>
                        {products.map((product: Product) => (
                            <CardItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
