import { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

interface PaymentIntentResponse {
    clientSecret: string
}

interface ErrorResponse {
    message: string
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<PaymentIntentResponse | ErrorResponse>
) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).json({ message: 'Method Not Allowed' })
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 3245,
            currency: 'usd',
        })

        return res
            .status(200)
            .json({ clientSecret: paymentIntent.client_secret })
    } catch (err: any) {
        console.error(err)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

export default handler
