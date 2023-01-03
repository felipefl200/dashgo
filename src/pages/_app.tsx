import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>

  )

}
