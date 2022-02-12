import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import NewsletterForm from '@/components/NewsletterForm'
import RecentPosts from '@/components/RecentPosts'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import Courses from '@/components/Courses'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
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
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Courses posts={posts} />
      <RecentPosts
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Recent Posts"
      />

      {posts.length > MAX_DISPLAY && (
        <Flex justifyContent={'flex-end'} py={[2, 3]}>
          <Link href="/blog" aria-label="all posts">
            <a>
              <Text textTransform={'uppercase'}>All Posts &rarr;</Text>
            </a>
          </Link>
        </Flex>
      )}

      <>
        <Flex direction={'column'} justifyContent={'left'} my={4}>
          <Heading as="h2" py="3" fontSize={['xl']}>
            Top Tags
          </Heading>

          <Flex flexWrap={'wrap'}>
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((tag, index) => {
              if (tags[tag] > 2) {
                return (
                  <Box key={tag}>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                      <Tag text={tag} key={index} icon={` (${tags[tag]})`} />
                    </Flex>
                  </Box>
                )
              }
            })}
          </Flex>
        </Flex>
        {
          <Flex justifyContent={'flex-end'} py={[2, 3]}>
            <Link href="/blog" aria-label="all posts">
              <a>
                <Text textTransform={'uppercase'}>All Tags &rarr;</Text>
              </a>
            </Link>
          </Flex>
        }
      </>
      {siteMetadata.newsletter.provider !== '' && (
        <Flex alignItems={'center'} justifyContent={'center'} py={[2, 4]}>
          <NewsletterForm />
        </Flex>
      )}
    </>
  )
}
