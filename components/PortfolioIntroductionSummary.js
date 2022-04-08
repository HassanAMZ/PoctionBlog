import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
export default function PortfolioIntroductionSummary() {
  return (
    <>
      <Flex direction={'column'} alignItems={'left'}>
        <Box borderRadius="100" py="3" w="32" bgColor="white">
          <Image
            src="/static/images/avatar.png"
            alt="Shahzada Ali Hassan"
            width="32"
            height="32"
            layout="responsive"
            objectFit="contain"
          />
        </Box>
        <Text fontSize={['xs']}>Google Tag Manager Specialist</Text>
        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'teal.400',
              zIndex: -1,
            }}
          >
            Shahzada A. Hassan
          </Text>
        </Heading>
        <Flex>
          <Box fontSize={['xs', 'sm', 'md']}>Top Rated Freelancer at&nbsp;</Box>
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
        <Text py="3" fontSize={['xs', 'sm', 'md']} color="gray.600">
          Properly set up your Google Analytics account and deliver meaningful and understandable
          reporting using your platform of choice.
        </Text>
      </Flex>
    </>
  )
}
