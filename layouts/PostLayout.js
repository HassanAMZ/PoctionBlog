import Link from 'next/link'

import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import GAPageView from '@/components/GAPageView'
import { GtmEvent } from '@/lib/googleTagManagerEvents'
import { useEffect } from 'react'
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  UnorderedList,
  ListItem,
  Button,
  Container,
  Text,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react'
const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteDomain}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags, coverImage, blogID } = frontMatter

  useEffect(() => {
    GtmEvent('singleBlogPost', blogID, title, {
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
    })
  }, [])

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
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      {/* <Container maxW="container.xl" borderColor="gray.200" borderBottomWidth="thick" px="0">
        <Image src={coverImage} />
      </Container> */}

      <Container maxW="container.xl">
        <Box as="article" id="singleBlogPost" py="2">
          <Box>
            <Flex direction="column">
              <Heading as="h2" py="2" fontSize={['1.75rem', '2.2rem']}>
                {title}
              </Heading>

              <Flex direction={['column', 'row', 'row']} justify="left" fontSize="xs" columnGap="2">
                <Flex justify="left" columnGap="2">
                  <Link href="/about">
                    <a>
                      <Text>{name}</Text>
                    </a>
                  </Link>
                  <Box as="span">{` • `}</Box>
                  <Text as="time" dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </Text>
                  <Box as="span">{` • `}</Box>
                </Flex>
                <Flex direction="row" columnGap="2">
                  <Box as="span" id="time"></Box>
                  <Text>min read</Text>

                  <Box as="span">{` • `}</Box>
                  <GAPageView slug={slug} />
                </Flex>
              </Flex>

              {tags && (
                <Flex wrap="wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </Flex>
              )}
            </Flex>
            <Flex direction="column" py="2">
              <Box as="article">{children}</Box>
              <Flex direction="row" gap="2" justify="space-between" align="center">
                <Link href={discussUrl(slug)} rel="nofollow">
                  <a>
                    <Text>Discuss on Twitter</Text>
                  </a>
                </Link>
                <Box as="span">{` • `}</Box>
                <Link href={editUrl(fileName)}>
                  <a>
                    <Text>View on GitHub</Text>
                  </a>
                </Link>
              </Flex>
              <Comments frontMatter={frontMatter} />

              <Box>
                <Box py="2">
                  {(next || prev) && (
                    <Flex justify="space-between">
                      {prev && (
                        <Flex direction="column" align="start" py="2">
                          <Button
                            colorScheme="teal"
                            size="sm"
                            w="fit-content"
                            textTransform={'uppercase'}
                            variant="solid"
                            rounded={'full'}
                            fontWeight={'normal'}
                            px={6}
                            bg={'teal.400'}
                            _hover={{ bg: 'teal.500' }}
                            my="4"
                          >
                            Previous Article
                          </Button>

                          <Link href={`/blog/${prev.slug}`}>
                            <a>
                              <Text py="2">{prev.title}</Text>
                            </a>
                          </Link>
                        </Flex>
                      )}
                      {next && (
                        <Flex direction="column" align="end" py="2">
                          <Button
                            w="fit-content"
                            colorScheme="teal"
                            size="sm"
                            textTransform={'uppercase'}
                            variant="solid"
                            rounded={'full'}
                            fontWeight={'normal'}
                            px={6}
                            bg={'teal.400'}
                            _hover={{ bg: 'teal.500' }}
                            my="4"
                          >
                            Next Article
                          </Button>
                          <Link href={`/blog/${next.slug}`}>
                            <a>
                              <Text py="2">{next.title}</Text>
                            </a>
                          </Link>
                        </Flex>
                      )}
                    </Flex>
                  )}
                </Box>

                <Link href="/blog">
                  <a>
                    <Button
                      colorScheme="teal"
                      size="sm"
                      w="100%"
                      textTransform={'uppercase'}
                      variant="solid"
                      rounded={'full'}
                      fontWeight={'normal'}
                      px={6}
                      bg={'teal.400'}
                      _hover={{ bg: 'teal.500' }}
                      my="4"
                    >
                      <Text py="2">&larr; Back to the blogs</Text>
                    </Button>
                  </a>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
    </>
  )
}
