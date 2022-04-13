import '@/css/tailwind.css'
import '@/css/global.css'
import '@/css/prism.css'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import MailChimpHeadCode from '@/components/MailChimpHeadCode'
import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/lib/utils/theme'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

let GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
} else {
  GTM_Tracking_ID = 'GTM-XXXXXXX'
}

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_Tracking_ID}');
        `,
        }}
      />
      <MailChimpHeadCode />
      <ThemeProvider attribute="class">
        <ChakraProvider theme={theme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta
              name="google-site-verification"
              content="LOmgcQtS3n4SzA1wUbtCUBeOyVp1Kq8d4XWHvWAf51Y"
            />
          </Head>

          <NavBar />
          <Component {...pageProps} />

          <Footer />
        </ChakraProvider>
      </ThemeProvider>
    </>
  )
}
