import '@/css/tailwind.css'
import '@/css/prism.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import GoogleTagManagerScript from '@/components/analytics/GoogleTagManagerScript'
import MailChimpHeadCode from '@/components/MailChimpHeadCode'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta
            name="google-site-verification"
            content="s7T9ZCjd-3dRb1v4ju5Lwl6ndBZFEIiI4Ye8oV_MbW4"
          />
          <GoogleTagManagerScript />
          <MailChimpHeadCode />
        </Head>

        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  )
}
