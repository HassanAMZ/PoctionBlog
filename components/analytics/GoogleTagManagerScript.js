import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const GoogleTagManagerScript = () => {
  return (
    <>
      <Script strategy="lazyOnload" id="ga-script">
        {' '}
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${siteMetadata.analytics.googleTagManagerID}');
      `}
      </Script>
    </>
  )
}

export default GoogleTagManagerScript

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (action, category, label, value) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
