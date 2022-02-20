import SectionContainer from './SectionContainer'
import { Box, Flex } from '@chakra-ui/react'

const LayoutWrapper = ({ children }) => {
  return (
    <Flex direction="column">
      <SectionContainer>
        <Flex direction="column" justify="justify-between">
          <Box>{children}</Box>
        </Flex>
      </SectionContainer>
    </Flex>
  )
}

export default LayoutWrapper
