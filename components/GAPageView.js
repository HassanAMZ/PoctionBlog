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
      <div className="flex flex-row gap-2">
        <>
          <Eye />
        </>
        <div className="text-gray-900 dark:text-gray-100">{views}</div>
      </div>
    </>
  )
}
export default GAPageView
