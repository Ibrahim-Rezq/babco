import { Footer, Navigation } from '@/Components'
import { CartProvider } from '@/Context/useCart'
import { OrderProvider } from '@/Context/useOrder'
import '@/styles/index.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <CartProvider>
                <OrderProvider>
                    <Navigation />
                    <Component {...pageProps} />
                    <Footer />
                    <ToastContainer
                        position='bottom-right'
                        autoClose={3500}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='dark'
                    />
                </OrderProvider>
            </CartProvider>
        </SessionProvider>
    )
}

export default App
