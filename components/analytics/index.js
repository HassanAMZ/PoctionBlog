import GoogleTagManagerScript from './GoogleTagManagerScript'
import Plausible from './Plausible'
import SimpleAnalytics from './SimpleAnalytics'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.googleTagManagerID && <GoogleTagManagerScript />}
    </>
  )
}

export default Analytics
