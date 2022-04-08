import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import { Flex, Box, Heading, Button, Container } from '@chakra-ui/react'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <Container maxW="container.xl">
        <Flex direction={'column'} justifyContent={'left'} my={4}>
          <Heading as="h2" py="3" fontSize={['xl']}>
            Top Tags
          </Heading>

          <Flex flexWrap={'wrap'}>
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((tag, index) => {
              return (
                <Box key={tag}>
                  <Flex justifyContent={'center'} alignItems={'center'}>
                    <Tag text={tag} key={index} icon={` (${tags[tag]})`} />
                  </Flex>
                </Box>
              )
            })}
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
