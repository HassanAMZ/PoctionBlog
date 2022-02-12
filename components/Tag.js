import { Box, Link, Button, Flex, Text } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import NextLink from 'next/link'

const Tag = ({ text, icon }) => {
  const getRandomColor = () => {
    let color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
    return color
  }

  return (
    <Box pr="2" py="1">
      <NextLink href={`/tags/${kebabCase(text)}`} passHref>
        <Link isExternal>
          <Button size={'xs'} color={getRandomColor()} variant="outline">
            <Flex justifyContent={'center'} alignItems={'center'} fontSize={['xs', 'sm']}>
              <Text textTransform={'uppercase'} mr="2">
                {text.split(' ').join('-')}
              </Text>
              <Box>{icon}</Box>
            </Flex>
          </Button>
        </Link>
      </NextLink>
    </Box>
  )
}

export default Tag
