import Link from '@/components/Link'
import Tag from '@/components/Tag'
import GAPageView from '@/components/GAPageView'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { GtmEvent } from '@/lib/googleTagManagerEvents'
import { useEffect } from 'react'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const [
    allBlogPostIDs,
    allBlogPostSlugs,
    date,
    titleList,
    summary,
    tags,
    coverImage,
    blogDetails,
  ] = [[], [], [], [], [], [], [], {}]
  displayPosts.map((frontMatter, index) => {
    blogDetails[index] = frontMatter
    allBlogPostIDs[index] = frontMatter.blogID
    allBlogPostSlugs[index] = frontMatter.slug
    date[index] = frontMatter.date
    titleList[index] = frontMatter.title
    summary[index] = frontMatter.summary
    tags[index] = frontMatter.tags
    coverImage[index] = frontMatter.coverImage
  })

  useEffect(() => {
    GtmEvent('allBlogPosts', 'allBlogPosts', allBlogPostIDs, {
      allBlogPostIDs,
      allBlogPostSlugs,
      date,
      titleList,

      tags,
      coverImage,
    })
  }, [])

  return (
    <>
      <div className="py-6 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {title}
        </h1>
        <div className="relative ">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <ul>
        {!filteredBlogPosts.length && 'No posts found.'}
        {displayPosts.map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li
              key={slug}
              className="rounded bg-gradient-to-r p-1  from-[#D8B4FE] to-[#818CF8] mb-4"
            >
              <article className="rounded bg-white dark:bg-gray-900 space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline p-2">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className=" flex flex-row justify-between xl:flex-col text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <GAPageView slug={slug} />
                  </dd>
                </dl>

                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h3>

                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="prose text-sm text-gray-500 max-w-none dark:text-gray-400">
                    {summary}
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
