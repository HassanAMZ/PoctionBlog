import { useRouter } from 'next/router'
import webinarData from '@/data/webinarData'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'

const Webinar = () => {
  const router = useRouter()
  const { wid } = router.query

  let webinarObject = webinarData.find((object) => object.wid == wid)
  if (webinarObject === undefined) {
    return (
      <>
        <PageSEO title="404 Page" description="No Webinar" />
        <div className="mt-24 text-center">
          <PageTitle>
            The Webinar Does not Exists
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      </>
    )
  } else {
    return (
      <>
        <PageSEO title={webinarObject.title} description={webinarObject.description} />
        <div className="mt-24 text-center">
          <PageTitle>{webinarObject.title}</PageTitle>
        </div>
      </>
    )
  }
}

export default Webinar
