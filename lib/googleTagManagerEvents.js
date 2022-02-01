export const GtmEvent = (category, action, label, data) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'CustomEvent',
    event_category: category,
    event_label: label,
    event_action: action,
    event_data: data,
  })
}
