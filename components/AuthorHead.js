import SkillsGrid from '@/components/SkillsGrid'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'
import { Container, Box } from '@chakra-ui/react'
import Head from 'next/head'

const AuthorHead = (props) => {
  return (
    <>
      <PortfolioIntroductionSummary />
      <div>
        <Container maxW="container.lg" p={2}>
          <SkillsGrid />
        </Container>
      </div>
    </>
  )
}
export default AuthorHead
