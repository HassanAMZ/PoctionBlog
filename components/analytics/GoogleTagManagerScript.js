import siteMetadata from '@/data/siteMetadata'

const GoogleTagManagerScript = () => {
  const isProduction = process.env.NODE_ENV === 'production'
  return (
    <>
      {
        //isProduction &&
        <script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${siteMetadata.analytics.googleTagManagerID}');`,
          }}
        />
      }
    </>
  )
}

export default GoogleTagManagerScript
