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
import ListLayout from '@/layouts/ListLayout'

export const POSTS_PER_PAGE = 5
const MAX_DISPLAY = 5
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Home({ posts, initialDisplayPosts, pagination }) {
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
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
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
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
