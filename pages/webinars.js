import siteMetadata from '@/data/siteMetadata'
import webinarData from '@/data/webinarData'
import CardWebinar from '@/components/CardWebinar'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { trackEvent } from '@phntms/react-gtm'

export default function Webinars() {
  const allWid = []
  webinarData.map(({ wid }, index) => {
    allWid[index] = wid
  })
  trackEvent({
    event: 'CustomEvent',
    data: {
      category: 'allWebinar',
      action: 'webinarPage',
      label: allWid,
    },
  })
  return (
    <>
      <ScrollTopAndComment />
      <PageSEO title={`Webinars - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Webinars
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {webinarData.map((d) => (
              <CardWebinar
                wid={d.wid}
                key={d.wid}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="comment"></div>
    </>
  )
}
