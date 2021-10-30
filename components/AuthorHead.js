import SkillsGrid from '@/components/SkillsGrid'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'
import { Container, Box } from '@chakra-ui/react'
import Head from 'next/head'

const AuthorHead = (props) => {
  return (
    <>
      <Container maxW="container.lg" p={4} mt={'50px'}>
        <PortfolioIntroductionSummary />
      </Container>
      <Box bg="var(--secondary-text-color)">
        <Container maxW="container.lg" p={4}>
          <SkillsGrid />
        </Container>
      </Box>
    </>
  )
}
export default AuthorHead
