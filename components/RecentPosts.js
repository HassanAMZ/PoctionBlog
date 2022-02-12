import NextLink from 'next/link'
import Tag from '@/components/Tag'
import GAPageView from '@/components/GAPageView'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { GtmEvent } from '@/lib/googleTagManagerEvents'
import { useEffect, useState } from 'react'
import {
  Link,
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  UnorderedList,
  ListItem,
  Button,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
      <Box py={['5', '6']}>
        <Heading as="h2" py="3" fontSize={['xl']}>
          {title}
        </Heading>
      </Box>
      <UnorderedList listStyleType="none" ml="0">
        {!filteredBlogPosts.length && 'No posts found.'}
        {displayPosts.map((frontMatter, index) => {
          const { slug, date, title, summary, tags } = frontMatter

          let orderNumber = 0
          if (index === 0) {
            orderNumber = (
              <Button
                fontSize={'sm'}
                colorScheme="teal"
                textTransform={'uppercase'}
                variant="solid"
              >
                New
              </Button>
            )
          } else {
            orderNumber = (
              <Button
                fontSize={'sm'}
                colorScheme="teal"
                textTransform={'uppercase'}
                variant="outline"
              >
                00{index}
              </Button>
            )
          }

          return (
            <ListItem key={index}>
              {/* <Box>
                  <dt className="sr-only">Published on</dt>
                  <dd className=" flex flex-row justify-between xl:flex-col text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <GAPageView slug={slug} />
                  </dd>
                </Box> */}

              <Heading as="h2" fontSize={['md', 'xl']}>
                <Flex as="article" alignItems="center" direction="row" gap="2" py="1">
                  <NextLink href={`/blog/${slug}`} passHref>
                    <Link textTransform="capitalize" isExternal>
                      <Flex as="article" justifyContent="space-between" alignItems="center" gap="2">
                        <> {orderNumber}</>
                        <Box>{title}</Box>
                        <ExternalLinkIcon />
                      </Flex>
                    </Link>
                  </NextLink>
                </Flex>
              </Heading>

              {/* <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div> */}
              {/* <div className="prose text-sm text-gray-500 max-w-none dark:text-gray-400">
                    {summary}
                  </div> */}
            </ListItem>
          )
        })}
      </UnorderedList>
    </>
  )
}
