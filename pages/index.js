import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import GAPageView from '@/components/GAPageView'
import { useEffect } from 'react'
import FeaturedPosts from '@/components/FeaturedPosts'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  useEffect(() => {
    const [
      allBlogPostIDs,
      allBlogPostSlugs,
      date,
      title,
      summary,
      tags,
      coverImage,
      blogDetails,
    ] = [[], [], [], [], [], [], [], {}]
    posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
      blogDetails[index] = frontMatter
      allBlogPostIDs[index] = frontMatter.blogID
      allBlogPostSlugs[index] = frontMatter.slug
      date[index] = frontMatter.date
      title[index] = frontMatter.title
      summary[index] = frontMatter.summary
      tags[index] = frontMatter.tags
      coverImage[index] = frontMatter.coverImage
    })

    let dataLayer = window.dataLayer || []
    dataLayer.push({
      event: 'CustomEvent',
      category: 'allBlogPosts',
      action: 'homePage',
      label: allBlogPostIDs,
      details: {
        allBlogPostIDs,
        allBlogPostSlugs,
        date,
        title,
        summary,
        tags,
        coverImage,
        blogDetails,
      },
    })
  }, [])
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <FeaturedPosts posts={posts} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, coverImage, blogID } = frontMatter
            return (
              <li
                key={slug}
                className="rounded bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8] mb-4 "
              >
                <article className="rounded bg-white dark:bg-gray-900 p-2">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <div>
                      <div className="sr-only">Published on</div>
                      <div className="flex flex-row justify-between sm:flex-col text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                        <GAPageView slug={slug} />
                      </div>
                    </div>

                    <div className="space-y-2 xl:col-span-3">
                      <div className="space-y-2">
                        <div>
                          <h2 className="text-xl font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap ">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className=" text-sm text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
