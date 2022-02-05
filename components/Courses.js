import GAPageView from '@/components/GAPageView'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const Courses = ({ posts }) => {
  let coursesIDs = ['00008']
  let blogIDs = []
  posts.map((frontMatter, index) => {
    const { slug, date, title, summary, tags, blogID } = frontMatter
    coursesIDs.map((coursesID, indexA) => {
      if (blogID == coursesID) {
        blogIDs[indexA] = (
          <article
            key={index}
            className="flex sm:flex-col flex-col-reverse justify-between borderColorGradient rounded bg-white dark:bg-gray-900 p-2"
          >
            <div className="">
              <div className="sr-only">Published on</div>
              <div className="flex sm:flex-row  justify-between  text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time className="pb-3 sm:block hidden" dateTime={date}>
                  {formatDate(date)}
                </time>
                <GAPageView slug={slug} />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                  {title}
                </Link>
              </h2>

              <div className="flex flex-wrap sm:block hidden ">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>

            <div className=" sm:block hidden text-sm text-gray-500 max-w-none dark:text-gray-400">
              {summary}
            </div>

            <div className="text-base sm:block hidden font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          </article>
        )
      }
    })
  })
  return (
    <div>
      <h1 className="py-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Courses
      </h1>
      <div className="grid grid-cols-1 gap-1">{blogIDs}</div>
    </div>
  )
}

export default Courses
