import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import { Box, Flex, Text, Container } from '@chakra-ui/react'
import MobileNav from '@/components/MobileNav'
import Image from 'next/image'

const NavBar = () => {
  return (
    <Box bgColor="teal">
      <Container maxW="container.md">
        <Flex as="header" direction="row " justify="space-between" align="center" py="3">
          <Flex direction="row" gap="2">
            {headerNavLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <a>
                  <Text fontWeight="semi-bold" color="white">
                    {link.title}
                  </Text>
                </a>
              </Link>
            ))}
          </Flex>
          <Flex direction="row" gap="2" align="center" justify="center">
            <Box borderRadius="100" w="8" bgColor="white">
              <Link href="/">
                <a>
                  <Image
                    src="/static/images/avatar.png"
                    width="500px"
                    height="500px"
                    layout="responsive"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </Box>
            {/* <MobileNav /> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default NavBar
