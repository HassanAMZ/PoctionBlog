import Link from 'next/link'
import Image from 'next/image'
import { Flex, Container, Heading, Text, Button, Box } from '@chakra-ui/react'

const Card = ({ title, description, imgSrc, href, pid, price }) => (
  <Flex direction="column" pb="5">
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

    <Heading as="h2" py="3" fontSize={['lg', 'xl']} m="3">
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
    <Text noOfLines="3" as="p" m="3">
      {description}
    </Text>

    {href && (
      <Link href={href} aria-label={`Link to ${title}`}>
        <a>
          <Button
            m="3"
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'teal'}
            bg={'teal.400'}
            _hover={{ bg: 'teal.500' }}
            my="4"
          >
            Continue ({price}) &rarr;
          </Button>
        </a>
      </Link>
    )}
  </Flex>
)

export default Card
