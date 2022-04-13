import Link from 'next/link'

import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import GAPageView from '@/components/GAPageView'
import { GtmEvent } from '@/lib/googleTagManagerEvents'
import { useEffect } from 'react'
import SocialIcon from '@/components/social-icons/index'
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Grid,
  Flex,
  UnorderedList,
  ListItem,
  Button,
  Container,
  Text,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react'

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
      const timeDiv = document.getElementById('time')
      if (timeDiv !== undefined) {
        if (timeDiv !== null) {
          timeDiv.innerText = time
        }
      }
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
      <Box bgColor={'gray.50'} py="5">
        <Container maxW="container.xl">
          <Grid templateRows="repeat(auto-fill, minmax(350px, 30vh))" placeContent={'center'}>
            <Flex
              align="center"
              justify={'center'}
              direction="column"
              gap="5"
              textTransform={'capitalize'}
              fontWeight="bold"
            >
              <Heading as="h2" py="2" fontSize={['1.75rem', '2.2rem']} align="center">
                {title}
              </Heading>
              {tags && (
                <Flex wrap="wrap" align="center" justify={'center'}>
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </Flex>
              )}
              <Flex
                direction={['column', 'column', 'row', 'row']}
                justify="left"
                fontSize="xs"
                columnGap="2"
                align="center"
              >
                <Flex justify="left" align="center" columnGap="2">
                  <Link href="/about">
                    <a>
                      <Text textAlign={'center'}>{name}</Text>
                    </a>
                  </Link>
                  <Box as="span">{` • `}</Box>
                  <Text textAlign={'center'} as="time" dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </Text>
                </Flex>
                <Flex direction="row" columnGap="2" align={'center'} justify="center">
                  <Box as="span" id="time"></Box>
                  <Text>min read</Text>

                  <Box as="span">{` • `}</Box>
                  <GAPageView slug={slug} />
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Box as="article" id="singleBlogPost" py="2">
          <Box>
            <Flex direction="column" py="2">
              <Box as="article">{children}</Box>

              {/* <Comments frontMatter={frontMatter} /> */}

              <Box>
                <Box py="2">
                  {(next || prev) && (
                    <Flex justify="space-between" direction={{ base: 'column', sm: 'row' }}>
                      {prev && (
                        <Flex direction="column" align={{ base: 'center', sm: 'start' }} py="2">
                          <Link
                            href={`/blog/${prev.slug}`}
                            aria-label="Next Blog"
                            passHref
                            width={{ base: '100%', sm: 'fit-content' }}
                          >
                            <ChakraLink textDecoration={'none !important'}>
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
                            </ChakraLink>
                          </Link>

                          <Link href={`/blog/${prev.slug}`}>
                            <a>
                              <Text py="2">{prev.title}</Text>
                            </a>
                          </Link>
                        </Flex>
                      )}
                      {next && (
                        <Flex direction="column" align={{ base: 'center', sm: 'end' }} py="2">
                          <Link href={`/blog/${next.slug}`}>
                            <a>
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
                            </a>
                          </Link>
                          <Link href={`/blog/${next.slug}`}>
                            <a>
                              <Text py="2" textAlign={'end'}>
                                {next.title}
                              </Text>
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
