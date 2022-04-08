import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import Image from 'next/image'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Container,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let NavLinks = headerNavLinks.map((link, index) => (
    <Link key={index} href={link.href}>
      <a>
        <Box
          px={2}
          py={1}
          color="white"
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: 'white',
            color: 'teal',
          }}
        >
          {link.title}
        </Box>
      </a>
    </Link>
  ))
  return (
    <Box bgColor="teal">
      <Container maxW="container.xl">
        <Box>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box
                px={2}
                py={1}
                color="white"
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'white',
                  color: 'teal',
                }}
              >
                <Link href="/">
                  <a>Shahzada Ali Hassan</a>
                </Link>
              </Box>
            </HStack>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {NavLinks}
            </HStack>
            <Flex alignItems={'center'}>
              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                > */}
              <Box
                bgColor={'white'}
                borderRadius="100px"
                width={'50px'}
                height="50px"
                position="relative"
              >
                <Link href="/about">
                  <a>
                    <Image
                      alt="Shahzada Ali Hassan"
                      src="/static/images/avatar.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </Box>
              {/* </MenuButton>
                <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
              </Menu> */}
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack>{NavLinks}</Stack>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  )
}
