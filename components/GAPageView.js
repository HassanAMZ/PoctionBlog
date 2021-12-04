import useSWR from 'swr'
import Eye from '../public/static/favicons/eye.svg'

const GAPageView = ({ slug }) => {
  const { data } = useSWR(
    `/api/page-views?slug=/blog/${encodeURIComponent(slug)}`,
    async (url) => {
      const res = await fetch(url)
      return res.json()
    },
    { revalidateOnFocus: false }
  )
  const views = data?.pageViews || 0
  return (
    <>
      {/* <Eye /> */}

      <div>{views} views</div>
    </>
  )
}
export default GAPageView
