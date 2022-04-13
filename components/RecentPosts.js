import Link from 'next/link'
import Tag from '@/components/Tag'
import GAPageView from '@/components/GAPageView'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { GtmEvent } from '@/lib/googleTagManagerEvents'
import { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Divider,
  Text,
  InputGroup,
  InputRightElement,
  Flex,
  UnorderedList,
  ListItem,
  Button,
  Grid,
  GridItem,
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

  useEffect(() => {
    const [
      useEffectAllBlogPostIDs,
      useEffectAllBlogPostSlugs,
      useEffectDate,
      useEffectTitleList,
      useEffectSummary,
      useEffectTags,
      useEffectCoverImage,
      useEffectBlogDetails,
    ] = [[], [], [], [], [], [], [], {}]
    displayPosts.map((frontMatter, index) => {
      useEffectBlogDetails[index] = frontMatter
      useEffectAllBlogPostIDs[index] = frontMatter.blogID
      useEffectAllBlogPostSlugs[index] = frontMatter.slug
      useEffectDate[index] = frontMatter.date
      useEffectTitleList[index] = frontMatter.title
      useEffectSummary[index] = frontMatter.summary
      useEffectTags[index] = frontMatter.tags
      useEffectCoverImage[index] = frontMatter.coverImage
    })
    GtmEvent('allBlogPosts', 'allBlogPosts', useEffectAllBlogPostIDs, {
      useEffectAllBlogPostIDs,
      useEffectAllBlogPostSlugs,
      useEffectDate,
      useEffectTitleList,
      useEffectTags,
      useEffectCoverImage,
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
                size={['x-small', 'sm']}
                colorScheme="teal"
                textTransform={'uppercase'}
                variant="solid"
                px="2"
                py="1"
                key={index}
                fontWeight={'normal'}
                bg={'teal.400'}
                _hover={{ bg: 'teal.500' }}
                border="1px"
                borderColor={'gray.500'}
              >
                New
              </Button>
            )
          } else {
            orderNumber = (
              <Button
                size={['x-small', 'sm']}
                textTransform={'uppercase'}
                variant="solid"
                px="2"
                py="1"
                key={index}
                fontWeight={'normal'}
                _hover={{ bg: 'teal.500', color: 'white' }}
                border="1px"
                borderColor={'gray.500'}
              >
                &nbsp; 0{index} &nbsp;
              </Button>
            )
          }

          return (
            <Box key={index}>
              <ListItem
                key={index}
                py="2"
                _hover={{
                  color: 'teal.500',
                }}
              >
                {/* <Box>
                  <dt className="sr-only">Published on</dt>
                  <dd className=" flex flex-row justify-between xl:flex-col text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <GAPageView slug={slug} />
                  </dd>
                </Box> */}

                <Link href={`/blog/${slug}`}>
                  <a>
                    <Flex
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      gap="2"
                    >
                      <Flex
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="3"
                      >
                        <Box> {orderNumber}</Box>
                        <Heading
                          as="h2"
                          fontSize={['sm', 'md', 'xl']}
                          textTransform="capitalize"
                          noOfLines={'1'}
                        >
                          {title}
                        </Heading>
                      </Flex>
                      <ExternalLinkIcon />
                    </Flex>
                  </a>
                </Link>

                {/* <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div> */}
                {/* <div className="prose text-sm text-gray-500 max-w-none dark:text-gray-400">
                    {summary}
                  </div> */}
              </ListItem>
              <Divider />
            </Box>
          )
        })}
      </UnorderedList>
    </>
  )
}
