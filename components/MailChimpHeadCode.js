import Script from 'next/script'
const MailChimpHeadCode = () => {
  const isProduction = process.env.NODE_ENV === 'production'
  return (
    <>
      {isProduction && (
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p)
            {
              ((m = c.createElement(h)),
              (p = c.getElementsByTagName(h)[0]),
              (m.async = 1),
              (m.src = i),
              p.parentNode.insertBefore(m, p))
            }
            (document,"script","https://chimpstatic.com/mcjs-connected/js/users/dbc529c3ae30d91cbd0ad14fa/e24c78d62d65429c7bffca87a.js");`,
          }}
        />
      )}
    </>
  )
}

export default MailChimpHeadCode
