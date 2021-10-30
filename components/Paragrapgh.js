import { Flex, Text } from '@chakra-ui/react'

export default function Paragrapgh({ children, type }) {
  return (
    <>
      <Flex flexDirection="column" alignItems="left">
        <Text as={type}>{children}</Text>
      </Flex>
    </>
  )
}
