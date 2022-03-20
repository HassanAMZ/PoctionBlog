import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import RecentPosts from '@/components/RecentPosts'
import { getAllTags } from '@/lib/tags'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'
import Courses from '@/components/Courses'
import { Flex, Box, Heading, Button, Container } from '@chakra-ui/react'

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
    <Box>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Box py="4">
        <Container maxW="container.md" py="4">
          <PortfolioIntroductionSummary />
        </Container>
      </Box>
      <Container maxW="container.md" py="4">
        <Courses posts={posts} />
      </Container>
      <Box py="4">
        <Container maxW="container.md">
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
                  <Button
                    colorScheme="teal"
                    size="sm"
                    my={'2'}
                    textTransform={'uppercase'}
                    variant="solid"
                  >
                    All Posts &rarr;
                  </Button>
                </a>
              </Link>
            </Flex>
          )}
        </Container>
      </Box>
      <Container maxW="container.md">
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
              <Link href="/tags" aria-label="all posts">
                <a>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    my={'2'}
                    textTransform={'uppercase'}
                    variant="solid"
                  >
                    All Tags &rarr;
                  </Button>
                </a>
              </Link>
            </Flex>
          }
        </>
      </Container>
    </Box>
  )
}
