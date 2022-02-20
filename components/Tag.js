import { Box, Button, Flex, Text } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

const Tag = ({ text, icon }) => {
  function getDarkColor() {
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10)
    }
    return color
  }
  return (
    <Box pr="2" py="1">
      <Link href={`/tags/${kebabCase(text)}`}>
        <a>
          <Button size={'xs'} color={getDarkColor()} variant="outline" borderColor={getDarkColor()}>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              fontSize={['x-small', 'xs', 'sm']}
            >
              <Text textTransform={'uppercase'} mr="2">
                {text.split(' ').join('-')}
              </Text>
              <Box>{icon}</Box>
            </Flex>
          </Button>
        </a>
      </Link>
    </Box>
  )
}

export default Tag
