import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import MobileNav from '@/components/MobileNav'

const NavBar = () => {
  return (
    <Flex as="header" direction="row " justify="space-between" align="center" pt="6" pb="3">
      <Flex direction="row" gap="2">
        {headerNavLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <a>
              <Text>{link.title}</Text>
            </a>
          </Link>
        ))}
      </Flex>
      <Flex direction="row" gap="2" align="center" justify="center">
        <Link href="/">
          <a>
            <Box borderRadius="100" w="8" bgColor="teal">
              <Image src="/static/images/avatar.png" />
            </Box>
          </a>
        </Link>
        <MobileNav />
      </Flex>
    </Flex>
  )
}

export default NavBar
