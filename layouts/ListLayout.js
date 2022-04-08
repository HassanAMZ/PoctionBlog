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
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  UnorderedList,
  ListItem,
  Container,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'

import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons'

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
      <Container maxW="container.xl">
        <Box py={['5', '6']}>
          <Heading as="h2" py="3" fontSize={['xl']}>
            {title}
          </Heading>
          <InputGroup size="md">
            <Input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search articles"
              placeholder="Search articles"
              colorScheme="teal"
            />
            <InputRightElement width="2rem">
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
        </Box>
        <UnorderedList listStyleType="none" m="0">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter, index) => {
            const { slug, date, title, summary, tags } = frontMatter

            return (
              <ListItem
                key={index}
                className="rounded bg-gradient-to-r p-1  from-[#D8B4FE] to-[#818CF8] mb-4"
              >
                <Box p="3" bgColor="white">
                  <Box>
                    <Box>
                      <VisuallyHidden>Published on</VisuallyHidden>
                      <Flex justify={['space-between']} direction={['row']} fontSize={['xs', 'sm']}>
                        <Box as="time" dateTime={date}>
                          {formatDate(date)}
                        </Box>
                        <GAPageView slug={slug} />
                      </Flex>
                    </Box>
                  </Box>

                  <Heading as="h2" fontSize={['xl']}>
                    <Flex
                      as="article"
                      justifyContent="flex-start"
                      alignItems="center"
                      direction="row"
                      gap="2"
                      py="1"
                    >
                      <Link href={`/blog/${slug}`}>
                        <a>
                          <Text textTransform="capitalize">{title}</Text>
                        </a>
                      </Link>
                    </Flex>
                  </Heading>

                  <Flex flexWrap={'wrap'}>
                    {tags.map((tag) => (
                      <Tag icon={<ExternalLinkIcon />} key={tag} text={tag} />
                    ))}
                  </Flex>
                  <Text fontSize={'sm'} fontWeight="light" noOfLines={[2]}>
                    {summary}
                  </Text>
                </Box>
              </ListItem>
            )
          })}
        </UnorderedList>

        {pagination && pagination.totalPages > 1 && !searchValue && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </Container>
    </>
  )
}
