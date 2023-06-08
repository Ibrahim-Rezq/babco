import { BsCartCheck } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
import { useCart } from '../../Context/useCart'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Role } from '@prisma/client'

const Navigation = () => {
    const { itemsTotal } = useCart()
    const { data: session, status } = useSession()
    const router = useRouter()

    const isActive = (path: string) => router.pathname === path
    return (
        <>
            <div className='h-20' />
            <nav className='navbar bg-gray-950 p-4 z-50 fixed h-20 top-0 w-full'>
                <div className='flex-1'>
                    <Link
                        href='/'
                        className='text-4xl mr-2 text-white font-[Poppins]'
                    >
                        bab<span className='text-red-500'>c</span>oo
                    </Link>
                </div>
                <ul className='menu menu-horizontal px-1 flex-none'>
                    <li
                        className={`mx-2 ${
                            isActive('/') ? 'text-primary' : ''
                        }`}
                    >
                        <Link href='/'>Accueil</Link>
                    </li>
                    {isActive('/') && (
                        <li className='mx-2'>
                            <a href='#contact'>Contact</a>
                        </li>
                    )}
                    {status === 'authenticated' && (
                        <li className='mx-2'>
                            <button type='button'>
                                <CgProfile />
                                <span>Hi {session?.user?.name}</span>
                            </button>
                        </li>
                    )}
                    <li className='mx-2'>
                        <Link
                            href='/payment/cart'
                            className={
                                isActive('/payment/cart') ? 'text-primary' : ''
                            }
                        >
                            <span className='indicator'>
                                <BsCartCheck className='text-2xl' />
                                <span className='badge badge-xs badge-primary indicator-item'>
                                    {itemsTotal}
                                </span>
                            </span>
                        </Link>
                    </li>
                    {status === 'authenticated' ? (
                        <li className='mx-2'>
                            <button type='button' onClick={() => signOut()}>
                                Logout
                            </button>
                        </li>
                    ) : (
                        <li className='mx-2'>
                            <button type='button' onClick={() => signIn()}>
                                Login
                            </button>
                        </li>
                    )}
                    {session?.user.role === Role.ADMIN && (
                        <li
                            className={`mx-2 ${
                                isActive('/dashboard/orders')
                                    ? 'text-primary'
                                    : ''
                            }`}
                        >
                            <Link href='/dashboard/orders' passHref>
                                Order
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navigation
