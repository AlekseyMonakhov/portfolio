import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont',
})

export default function App({ Component, pageProps }: AppProps) {
    const { asPath } = useRouter()
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main
                className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`}>
                <NavBar />
                <AnimatePresence mode={'wait'}>
                    <Component key={asPath} {...pageProps} />
                </AnimatePresence>
                <Footer />
            </main>
        </>
    )
}
