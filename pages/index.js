import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import NewsletterForm from '@/components/NewsletterForm'
import { useEffect } from 'react'
import FeaturedPosts from '@/components/FeaturedPosts'
import ListLayout from '@/layouts/ListLayout'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export const POSTS_PER_PAGE = 5
const MAX_DISPLAY = 5
export async function getStaticProps() {
  const tags = await getAllTags('blog')
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination, tags } }
}

export default function Home({ posts, initialDisplayPosts, pagination, tags }) {
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
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <FeaturedPosts posts={posts} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Recent Posts"
      />

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
      <>
        <div className="flex flex-col justify-left my-4">
          <div className="py-3 space-x-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Top Tags
            </h1>
          </div>
          <div className="flex flex-wrap max-w-3xl">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (tags[t] > 3) {
                return (
                  <>
                    <div key={t} className="my-1 sm:my-2 mr-5">
                      <Tag text={t} />
                      <Link
                        href={`/tags/${kebabCase(t)}`}
                        className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                      >
                        {` (${tags[t]})`}
                      </Link>
                    </div>
                  </>
                )
              } else {
                return <></>
              }
            })}
          </div>
        </div>
        {
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/tags"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all tags"
            >
              All Tags &rarr;
            </Link>
          </div>
        }
      </>
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
