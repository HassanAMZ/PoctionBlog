import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { trackEvent } from '@phntms/react-gtm'

let GA_TRACKING_ID = ''
const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  GA_TRACKING_ID = siteMetadata.analytics.googleTagManagerID || ''
} else if (!isProduction) {
  GA_TRACKING_ID = 'GTM-123456'
}
const Projects = () => {
  const [allKeys, allTitle, allDescription, allImgSrc, allHref, allPid] = [[], [], [], [], [], []]
  projectsData.map(({ key, title, description, imgSrc, href, pid }, index) => {
    allKeys[index] = key
    allTitle[index] = title
    allDescription[index] = description
    allImgSrc[index] = imgSrc
    allHref[index] = href
    allPid[index] = pid
  })
  trackEvent({
    event: 'CustomEvent',
    data: {
      category: 'allProjects',
      action: 'projectPage',
      label: allPid,
      details: {
        allKeys,
        allTitle,
        allDescription,
        allImgSrc,
        allHref,
        allPid,
      },
    },
  })
  return (
    <>
      {console.log('isProduction Project', isProduction, 'GA_TRACKING_ID', GA_TRACKING_ID)}
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                pid={d.pid}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Projects
