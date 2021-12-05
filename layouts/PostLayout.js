import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainerPost from '@/components/SectionContainerPost'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

import GAPageView from '@/components/GAPageView'
import { useEffect } from 'react'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteDomain}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, coverImage, blogID } = frontMatter

  useEffect(() => {
    function readingTime() {
      const text = document.getElementById('singleBlogPost').innerText
      const wpm = 225
      const words = text.trim().split(/\s+/).length
      const time = Math.ceil(words / wpm)
      document.getElementById('time').innerText = time
    }
    readingTime()
    let dataLayer = window.dataLayer || []
    dataLayer.push({
      event: 'CustomEvent',
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
    })
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
          <header>
            <div className="space-y-1 text-center">
              <div>
                <div className="flex flex-row items-center justify-between  text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <p>
                    <span id="time"></span> minute read
                  </p>
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                  <GAPageView slug={slug} />
                </div>
              </div>
              <div className="pt-4">
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200  dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="py-6">
              <div className="sr-only">Authors</div>
              <div>
                <ul className="flex justify-center space-x-8  ">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <div className="text-sm flex flex-col font-medium leading-5 whitespace-nowrap">
                        <div className="sr-only">Name</div>
                        <div className="text-gray-900 dark:text-gray-100">{author.name}</div>
                        <div className="sr-only">Instagram</div>
                        <div>
                          {author.instagram && (
                            <Link
                              href={author.instagram}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.instagram.replace('https://instagram.com/', '@')}
                            </Link>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none text-base">
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
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
                {tags && (
                  <div className="py-4">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
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
