import { useState } from 'react'
import {
    StripeCardElement,
    StripeCardElementChangeEvent,
    loadStripe,
} from '@stripe/stripe-js'

import {
    CardElement,
    useStripe,
    Elements,
    useElements,
} from '@stripe/react-stripe-js'

import axios from 'axios'
import { FaSpinner } from 'react-icons/fa'
const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '')
import { useOrder } from '../../Context/useOrder'
import { useCart } from '../../Context/useCart'
import { useRouter } from 'next/navigation'

const cardStyle = {
    style: {},
}

const CheckoutForm = () => {
    const { cart, total, clearCart } = useCart()
    const { addItemToOrder } = useOrder()
    const nav = useRouter()
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState<null | string>('')
    const [processing, setProcessing] = useState<boolean>(false)
    const [disabled, setDisabled] = useState(true)

    const stripe = useStripe()
    const elements = useElements()

    const handleChange = (event: StripeCardElementChangeEvent) => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : '')
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setProcessing(true)
        const { data } = await axios.post(
            '/api/checkout_sessions',
            JSON.stringify({ amount: total })
        )
        const payload =
            stripe &&
            (await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card:
                        (elements && elements.getElement(CardElement)) ||
                        ({} as StripeCardElement),
                },
            }))
        // addItemToOrder(cart);
        // clearCart();
        if (payload && payload.error) {
            setError(`payment Failed: ${payload.error.message}`)
            setProcessing(false)
        } else {
            setError(null)
            setProcessing(false)
            setSucceeded(true)
            addItemToOrder(cart)
            clearCart()
            setTimeout(() => {
                nav.push('/')
                console.log('finished successfully')
            }, 5000)
        }
    }

    return (
        <div>
            {succeeded ? (
                <article className='m-4 mx-auto py-4 px-8 rounded-lg max-w-md border capitalize'>
                    <h4 className='text-xl font-bold my-2'>Thank you</h4>
                    <h4 className='text-xl font-bold my-2'>
                        Your Payment was succesful
                    </h4>
                    <FaSpinner className='animate-spin inline text-sky-600' />
                    <p className='inline ms-2'>redirecting to homePage </p>
                </article>
            ) : (
                <article className='m-4 mx-auto py-4 px-8 rounded-lg max-w-md border capitalize'>
                    <h4 className='text-xl font-bold my-2'>
                        Hello {'myUser' && 'myUser.name'}
                    </h4>
                    <p>Your Total is: {total} $</p>
                    <p>Items Total are: {0}</p>
                    <p>Test Card : 4242 4242 4242 4242</p>
                </article>
            )}
            <form
                id='payment-form'
                onSubmit={handleSubmit}
                className='w-[30vw] min-w-[30rem] bg-slate-100 rounded-md p-10 m-auto my-4'
            >
                <CardElement
                    id='payment-element'
                    options={cardStyle}
                    className='mb-6 py-2'
                    onChange={handleChange}
                />
                <button
                    className='btn-dark cursor-pointer duration-200 disabled:cursor-default disabled:opacity-20 disabled:hover:bg-slate-600'
                    disabled={processing || disabled || succeeded}
                    id='submit'
                >
                    <span id='button-text'>
                        {processing ? (
                            <FaSpinner className='animate-spin' />
                        ) : (
                            'Pay'
                        )}
                    </span>
                </button>
                {error && (
                    <div
                        id='payment-message'
                        role='alert'
                        className='text-slate-600 text-lg leading-5 pt-3 text-center'
                    >
                        {error}
                    </div>
                )}
                {succeeded && (
                    <p id={'payment-message'}>
                        Payment succeeded, see the result in your
                        <a href={`https://dashboard.stripe.com/test/payments`}>
                            Stripe dashboard.
                        </a>
                        Refresh the page to pay again.
                    </p>
                )}
            </form>
        </div>
    )
}

const StripeCheckout = () => {
    return (
        <div>
            <Elements stripe={promise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default StripeCheckout
