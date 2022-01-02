import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainerPost from '@/components/SectionContainerPost'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import GAPageView from '@/components/GAPageView'
import { useEffect } from 'react'
import { trackEvent } from '@phntms/react-gtm'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteDomain}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, coverImage, blogID } = frontMatter
  trackEvent({
    event: 'CustomEvent',
    data: {
      category: 'singleBlogPost',
      action: blogID,
      label: title,
      details: {
        slug,
        fileName,
        date,
        title,
        tags,
        tags_1: tags[0],
        tags_2: tags[1],
        tags_3: tags[2],
        coverImage,
        blogID,
      },
    },
  })
  const { avatar, name, instagram } = authorDetails[0]
  useEffect(() => {
    function readingTime() {
      const text = document.getElementById('singleBlogPost').innerText
      const wpm = 225
      const words = text.trim().split(/\s+/).length
      const time = Math.ceil(words / wpm)
      document.getElementById('time').innerText = time
    }
    readingTime()
  }, [])

  return (
    <SectionContainerPost>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      <article id="singleBlogPost">
        <div>
          <header className="flex flex-col items-left">
            <div className="pb-3 ">
              <PageTitle>{title}</PageTitle>
            </div>
            <div className=" flex flex-row gap-2 items-left text-gray-700 pb-3 text-base dark:text-gray-400">
              <div className="flex sm:flex-row flex-col text-xs gap-1 sm:text-base justify-center">
                <div className="flex flex-row gap-1 sm:justify-between items-center">
                  <Link href={instagram}>
                    <div>{name}</div>
                  </Link>
                  {`  •  `}
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                  {`  •  `}
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div>
                    <span id="time"></span> min read
                  </div>
                  {` • `}
                  <GAPageView slug={slug} />
                </div>
              </div>
            </div>{' '}
            {tags && (
              <div>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
          </header>
          <div
            className="divide-y divide-gray-200  dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
              <div className="py-6 prose dark:prose-dark max-w-none text-left  text-sm sm:text-base">
                {children}
              </div>
              <div className="py-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200  dark:divide-gray-700">
                {(next || prev) && (
                  <div className="flex justify-between py-4 ">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainerPost>
  )
}
