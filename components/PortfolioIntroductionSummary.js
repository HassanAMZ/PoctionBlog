import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
export default function PortfolioIntroductionSummary() {
  return (
    <>
      <Flex direction={'column'} gap="5" alignItems={'left'} py="2">
        <Box width="32">
          <Image src="/static/images/avatar.png" alt="Shahzada Ali Hassan" />
        </Box>
        <Flex direction="column">
          <Heading as="h1" fontSize={['3xl']}>
            Shahzada A. Hassan
          </Heading>
          <Flex>
            <Box mb="2">Top Rated Freelancer at&nbsp;</Box>
            <NextLink
              href="https://www.upwork.com/freelancers/~015b35831b56606433"
              passHref
              aria-label="Upwork Profile of Shahzada Ali Hassan"
            >
              <Link textTransform={'uppercase'} isExternal fontWeight="bold">
                <Flex direction={'row'} justifyContent="center" alignItems={'center'}>
                  <Box pr="1">Upwork</Box>
                  <ExternalLinkIcon />
                </Flex>
              </Link>
            </NextLink>
          </Flex>
          <Text fontWeight={'light'} opacity="75%">
            Educating about web development, analytics, and freelancing.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
