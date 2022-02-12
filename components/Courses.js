import GAPageView from '@/components/GAPageView'
import Link from 'next/link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Grid, Flex, Heading, Box, VisuallyHidden, Button, Text, Image } from '@chakra-ui/react'

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
                <Link href={`/blog/${slug}`}>
                  <a>
                    <Text textTransform="capitalize">{title}</Text>
                  </a>
                </Link>
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
              <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                <a>
                  <Text textTransform={'uppercase'}>
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
                  </Text>
                </a>
              </Link>
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
