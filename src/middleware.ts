import { Role } from '@prisma/client'
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    async function middleware(req) {
        const token = await getToken({
            req,
            secret: process.env.SECRET,
        })
        console.log(token)
        if (token && token.role === Role.ADMIN) {
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/', req.url))
    },
    {
        callbacks: {
            authorized: async ({ req }) => {
                const session = await getToken({
                    req,
                    secret: process.env.SECRET,
                })
                return !!session
            },
        },
    }
)

export const config = {
    matcher: '/dashboard/orders',
}
