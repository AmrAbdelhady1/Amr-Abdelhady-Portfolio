import '@/styles/globals.css'
import Layout from '@/components/layout'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { StateContext } from '@/context/statecontext'

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <StateContext>
      <Layout>
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </StateContext>
  )
}
