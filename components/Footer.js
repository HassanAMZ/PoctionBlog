import { Box, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import NewsletterForm from '@/components/NewsletterForm'
const Logo = () => {
  return (
    <>
      <Link href="/about">
        <a>
          <Image
            alt="Shahzada Ali Hassan"
            src="/static/images/avatar.png"
            width="50px"
            height="50px"
          />
        </a>
      </Link>
    </>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const NavLinks = headerNavLinks.map((link, index) => (
  <Link key={index} href={link.href}>
    <a>{link.title}</a>
  </Link>
))

export default function LargeWithLogoLeft() {
  return (
    <Box bg="teal" color="white">
      <Box bgColor="gray.50" py="4">
        <Container maxW="container.xl">
          {siteMetadata.newsletter.provider !== '' && <NewsletterForm />}
        </Container>
      </Box>
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack>
            <Box>
              <Logo />
            </Box>
            <Link href="/about">
              <a>
                <Text color="white">{siteMetadata.author} </Text>
              </a>
            </Link>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact</Link>
          <Link href={'#'}>Partners</Link> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Nav Links</ListHeader>
            {NavLinks}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader> Support</ListHeader>
            <Link href={`mailto:${siteMetadata.email}`}>
              <a>Email</a>
            </Link>
            <Link href={siteMetadata.github}>
              <a>Github</a>
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>

            <Link href={siteMetadata.instagram}>
              <a>Instagram</a>
            </Link>
            <Link href={siteMetadata.twitter}>
              <a>Twitter</a>
            </Link>
            <Link href={siteMetadata.linkedin}>
              <a>Linkedin</a>
            </Link>
            <Link href={siteMetadata.youtube}>
              <a>Youtube</a>
            </Link>
            <Link href={siteMetadata.facebook}>
              <a>Facebook</a>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
