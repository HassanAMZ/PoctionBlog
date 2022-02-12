import useSWR from 'swr'
import { Box, Flex } from '@chakra-ui/react'

const GAPageView = ({ slug }) => {
  const { data } = useSWR(
    `/api/page-views?slug=/blog/${encodeURIComponent(slug)}`,
    async (url) => {
      const res = await fetch(url)
      return res.json()
    },
    { revalidateOnFocus: false }
  )
  const views = data?.pageViews || 0
  return (
    <>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="1"
        fontSize={['xs', 'sm']}
      >
        <Box>{views}</Box>
        <Box>Readers</Box>
      </Flex>
    </>
  )
}
export default GAPageView
