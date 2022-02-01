import siteMetadata from '@/data/siteMetadata'

let GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
  console.log(GTM_Tracking_ID)
} else {
  GTM_Tracking_ID = 'GTM-XXXXXXX'
  console.log(GTM_Tracking_ID)
}
export const GtmTrackingID = GTM_Tracking_ID
export const gtmEvent = (category, action, label, data) => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: 'CustomEvent',
    event_category: category,
    event_label: label,
    event_action: action,
    event_data: data,
  })
}
