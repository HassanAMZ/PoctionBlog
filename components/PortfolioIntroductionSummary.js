import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
export default function PortfolioIntroductionSummary() {
  return (
    <>
      <Flex direction={'column'} gap="5" alignItems={'left'} py="2">
        <Box borderRadius="100" w="32" bgColor="white">
          <Image
            src="/static/images/avatar.png"
            alt="Shahzada Ali Hassan"
            width="32"
            height="32"
            layout="responsive"
            objectFit="contain"
          />
        </Box>
        <Flex direction="column">
          <Heading as="h1" fontSize={['3xl']}>
            Shahzada A. Hassan
          </Heading>
          <Flex>
            <Box mb="2" fontSize={['xs', 'sm', 'md']}>
              Top Rated Freelancer at&nbsp;
            </Box>
            <Link
              href="https://www.upwork.com/freelancers/~015b35831b56606433"
              aria-label="Upwork Profile of Shahzada Ali Hassan"
            >
              <a>
                <Box textTransform={'uppercase'} fontWeight="bold">
                  <Flex
                    direction={'row'}
                    justifyContent="center"
                    alignItems={'center'}
                    fontSize={['xs', 'sm', 'md']}
                  >
                    <Text pr="1">Upwork</Text>
                    <ExternalLinkIcon />
                  </Flex>
                </Box>
              </a>
            </Link>
          </Flex>
          <Text fontSize={['xs', 'sm', 'md']}>
            Educating about web development, analytics, and freelancing.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
