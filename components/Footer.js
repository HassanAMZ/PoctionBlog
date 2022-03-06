import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

import { Box, Flex, Text, Container } from '@chakra-ui/react'
import NewsletterForm from '@/components/NewsletterForm'

export default function Footer() {
  return (
    <>
      <Box bgColor="gray.200" py="4">
        <Container maxW="container.md">
          {siteMetadata.newsletter.provider !== '' && <NewsletterForm />}
        </Container>
      </Box>
      <Box as="footer" bgColor="teal" py="4rem">
        <Container maxW="container.md">
          <Flex direction="column" align="center">
            <Flex direction="row" color="white" w="auto">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
              <SocialIcon kind="github" href={siteMetadata.github} size="6" />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
            </Flex>
            <Flex direction="row" color="white" gap="2">
              <Link href="/about">
                <a>
                  <Text color="white">{siteMetadata.author} </Text>
                </a>
              </Link>

              <div>{`© ${new Date().getFullYear()}`}</div>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
