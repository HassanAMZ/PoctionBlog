import { useRouter } from 'next/router'
import webinarData from '@/data/webinarData'
import { PageSEO } from '@/components/SEO'
import WebinarSimple from '@/layouts/WebinarSimple'
import PageTitle from '@/components/PageTitle'

export async function getStaticPaths() {
  return {
    paths: webinarData.map((webinars) => ({
      params: {
        wid: webinars.wid,
      },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const res = await webinarData
  const webinar = await webinarData
  return {
    props: { webinar },
  }
}

const Webinar = ({ webinar }) => {
  const router = useRouter()
  const { wid } = router.query
  let webinarObject = webinarData.find((object) => object.wid == wid)
  if (webinarObject !== undefined) {
    return (
      <>
        <WebinarSimple {...webinarObject} />
      </>
    )
  } else {
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
  }
}

export default Webinar
