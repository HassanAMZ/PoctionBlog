import GAPageView from '@/components/GAPageView'
import NextLink from 'next/link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Container,
  Grid,
  Flex,
  Heading,
  Box,
  VisuallyHidden,
  Button,
  Link,
  Image,
} from '@chakra-ui/react'

const Courses = ({ posts }) => {
  let coursesIDs = ['00008']
  let blogIDs = []
  posts.map((frontMatter, index) => {
    const { slug, date, title, summary, tags, blogID, coverImage } = frontMatter
    coursesIDs.map((coursesID, indexA) => {
      if (blogID == coursesID) {
        blogIDs[indexA] = (
          <Flex as="article" key={indexA} direction={['column']} p="0">
            <Box>
              <VisuallyHidden>Published on</VisuallyHidden>
              <Flex justify={['space-between']} direction={['row']} fontSize={['xs', 'sm']}>
                <Box as="time" dateTime={date}>
                  {formatDate(date)}
                </Box>
                <GAPageView slug={slug} />
              </Flex>
            </Box>
            {/* <Image borderRadius="full" src={coverImage} alt={title} />  */}
            <Box>
              <Heading as="h2" fontSize={['xl']}>
                <NextLink href={`/blog/${slug}`} passHref>
                  <Link textTransform="capitalize">{title}</Link>
                </NextLink>
              </Heading>
              <Flex direction={'row'} flexWrap="wrap" my={[1]}>
                {tags.map((tag, index) => (
                  <Tag key={index} text={tag} icon={<ExternalLinkIcon />} />
                ))}
              </Flex>
            </Box>
            <Box as="p" fontSize={['sm']} noOfLines={[3]}>
              {summary}
            </Box>
            <Box>
              <NextLink href={`/blog/${slug}`} passHref aria-label={`Read "${title}"`}>
                <Link textTransform={'uppercase'}>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    my={'2'}
                    textTransform={'uppercase'}
                    variant="solid"
                  >
                    <Flex justifyContent={'center'} alignItems={'center'}>
                      <Box textTransform={'capitalize'} fontSize={'sm'}>
                        Get the course &rarr;
                      </Box>
                    </Flex>
                  </Button>
                </Link>
              </NextLink>
            </Box>
          </Flex>
        )
      }
    })
  })
  return (
    <Box>
      <Heading as="h2" py="3" fontSize={['xl']}>
        Learn Universal Analytics By Google
      </Heading>
      <Grid className="grid grid-cols-1 gap-1">{blogIDs}</Grid>
    </Box>
  )
}

export default Courses
