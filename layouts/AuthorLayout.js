import { PageSEO } from '@/components/SEO'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <Box py="4">
        <PortfolioIntroductionSummary />
        <Heading as="h2" py="3" fontSize={['xl']}>
          A Quick Introduction
        </Heading>
        <Box>{children}</Box>
        <Box py="4">
          <Heading>For Contact</Heading>
          <Link href={'mailto:ReactJsWebDev@gmail.com'}>
            <a target="_blank" rel="noopener noreferrer">
              ReactJsWebDev@gmail.com
            </a>
          </Link>
        </Box>
      </Box>
    </>
  )
}
