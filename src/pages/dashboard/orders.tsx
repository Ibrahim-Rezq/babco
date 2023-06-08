import { useOrder } from '../../Context/useOrder'
import CardItem from '../../Components/Home/MenuItemNew'
const Orders = () => {
    const { order } = useOrder()

    return (
        <div>
            <ul>
                {order.map((orderItem: any) => {
                    const { order, ordernum } = orderItem

                    return (
                        <li key={ordernum}>
                            <li>{ordernum}</li>
                            {order.map((product: any) => {
                                return (
                                    <li>
                                        <CardItem
                                            key={product.id}
                                            product={product}
                                        />
                                    </li>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Orders
