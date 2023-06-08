import prisma from '@/utils/database/connection'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user)
                session.user = {
                    ...session.user,
                    id: token?.uid,
                    role: token?.role,
                }
            return session
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id
                if ('role' in user) token.role = user.role
            }
            return token
        },
    },

    session: { strategy: 'jwt' },
    debug: true,
    theme: { colorScheme: 'auto' },
}
export default NextAuth(authOptions)
