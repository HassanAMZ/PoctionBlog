import siteMetadata from '@/data/siteMetadata'

let GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
} else {
  GTM_Tracking_ID = 'GTM-XXXXXXX'
}
export const GtmTrackingID = GTM_Tracking_ID
export const GtmEvent = (category, action, label, data) => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: 'CustomEvent',
    event_category: category,
    event_label: label,
    event_action: action,
    event_data: data,
  })
}
