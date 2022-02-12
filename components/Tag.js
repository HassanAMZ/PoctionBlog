import { Box, Button, Flex, Text } from '@chakra-ui/react'
import kebabCase from '@/lib/utils/kebabCase'
import Link from 'next/link'

const Tag = ({ text, icon }) => {
  const getRandomColor = () => {
    let color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
    return color
  }

  return (
    <Box pr="2" py="1">
      <Link href={`/tags/${kebabCase(text)}`}>
        <a>
          <Text>
            <Button size={'xs'} color={getRandomColor()} variant="solid">
              <Flex justifyContent={'center'} alignItems={'center'} fontSize={['xs', 'sm']}>
                <Text textTransform={'uppercase'} mr="2">
                  {text.split(' ').join('-')}
                </Text>
                <Box>{icon}</Box>
              </Flex>
            </Button>
          </Text>
        </a>
      </Link>
    </Box>
  )
}

export default Tag
