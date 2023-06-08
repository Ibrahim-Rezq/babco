import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

interface CartItem {
    id: number
    name: string
    price: number
    itemQuantity: number
}

interface CartContextValue {
    cart: CartItem[]
    total: string
    itemsTotal: number
    addItemToCart: (newItem: CartItem) => void
    removeItemFromCart: (itemToRemove: CartItem) => void
    decreaseItem: (itemToDecrease: CartItem) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextValue>({} as CartContextValue)

export const CartProvider = (props: any) => {
    const [cart, setCart] = useState<CartItem[]>([])
    const [total, setTotal] = useState('0')
    const [itemsTotal, setItemsTotal] = useState(0)

    const addItemToCart = (newItem: CartItem) => {
        const itemIndex = cart.findIndex((item) => item.id === newItem.id)
        if (itemIndex >= 0) {
            const filteredCart = cart.map((cartItem) => {
                if (cartItem.id === newItem.id) {
                    return {
                        ...cartItem,
                        itemQuantity: ++cartItem.itemQuantity,
                    }
                }
                return cartItem
            })
            setCart(filteredCart)
            toast.info(`augumenter un ${cart[itemIndex].name} element `, {
                position: 'top-center',
            })
        } else {
            const newItems = { ...newItem, itemQuantity: 1 }
            setCart([...cart, newItems])
            toast.info('elemnt  est ajoute'), { position: 'top-center' }
        }
    }
    const removeItemFromCart = (itemToRemove: any) => {
        const filteredCart = cart.filter(
            (cartItem) => cartItem.id !== itemToRemove.id
        )
        setCart(filteredCart)
        toast.info('element est clear'), { position: 'top-center' }
    }

    const decreaseItem = (itemToDecrease: any) => {
        const filteredCart = cart.map((cartItem) => {
            if (cartItem.id === itemToDecrease.id)
                if (cartItem.itemQuantity > 1)
                    return {
                        ...cartItem,
                        itemQuantity: --cartItem.itemQuantity,
                    }
            return cartItem
        })
        setCart(
            filteredCart.filter(
                (cartItem) =>
                    cartItem.id === itemToDecrease.id &&
                    cartItem.itemQuantity === 1
            )
        )
    }
    const clearCart = () => {
        setCart([])
        setTotal('0')
        setItemsTotal(0)
        toast.info('panier est clear'), { position: 'top-center' }
    }
    const getTotal = () => {
        let total = 0
        let itemsTotal = 0
        cart.map((cartItem) => {
            total += cartItem.price * cartItem.itemQuantity
            itemsTotal += cartItem.itemQuantity
            return cartItem
        })
        setItemsTotal(itemsTotal)
        setTotal((total / 100).toFixed(2))
    }

    useEffect(() => {
        getTotal()
    }, [cart])

    const value: CartContextValue = {
        cart,
        total,
        itemsTotal,
        addItemToCart,
        removeItemFromCart,
        decreaseItem,
        clearCart,
    }

    return <CartContext.Provider value={value} {...props} />
}

export const useCart = (): CartContextValue => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error(`useCart must be used within a CartContextProvider.`)
    }
    return context
}
