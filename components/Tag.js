import { Box, Link, Button, Flex } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import NextLink from 'next/link'

const Tag = ({ text, icon }) => {
  return (
    <>
      <NextLink href={`/tags/${kebabCase(text)}`} passHref>
        <Link isExternal mr={'3'} my={'1'} ml={'0'}>
          <Flex justifyContent={'center'} alignItems={'center'} opacity={'75%'}>
            <Box textTransform={'uppercase'} fontSize={'xs'} mr="2">
              {text.split(' ').join('-')}
            </Box>
            {icon}
          </Flex>
        </Link>
      </NextLink>
    </>
  )
}

export default Tag
