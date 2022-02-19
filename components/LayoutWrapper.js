import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { Box, Flex } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
const LayoutWrapper = ({ children }) => {
  return (
    <Flex direction="column">
      <SectionContainer>
        <Flex direction="column" justify="justify-between">
          <NavBar />
          <Box as="main" className="mb-auto">
            {children}
          </Box>
          <Footer />
        </Flex>
      </SectionContainer>
    </Flex>
  )
}

export default LayoutWrapper
