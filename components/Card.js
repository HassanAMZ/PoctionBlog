import Link from 'next/link'
import Image from 'next/image'
import { Flex, Container, Heading, Text, Button, Box } from '@chakra-ui/react'

const Card = ({ title, description, imgSrc, href, pid }) => (
  <Flex direction="column" pb="5">
    <Container maxW="container.xl" px="0">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <a>
            <Image
              alt={title}
              src={imgSrc}
              width="2000px"
              height="1500px"
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          width="2000px"
          height="1500px"
          layout="responsive"
          objectFit="contain"
        />
      )}
    </Container>

    <Container maxW="container.xl" py="4">
      <Heading as="h2" py="3" fontSize={['lg', 'xl']}>
        {href ? (
          <>
            <Link href={href} aria-label={`Link to ${title}`}>
              <a>
                <Text>{title}</Text>
              </a>
            </Link>
          </>
        ) : (
          <Text>{title}</Text>
        )}
      </Heading>
      <Text noOfLines="3" as="p" my="4">
        {description}
      </Text>
      {href && (
        <Link py="3" href={href} aria-label={`Link to ${title}`}>
          <a>
            <Button
              colorScheme="teal"
              size="sm"
              my={'4'}
              textTransform={'uppercase'}
              variant="solid"
            >
              Learn more &rarr;
            </Button>
          </a>
        </Link>
      )}
    </Container>
  </Flex>
)

export default Card
