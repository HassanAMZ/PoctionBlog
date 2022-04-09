import { useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setError(true)
      setMessage('Your e-mail adress is invalid or you are already subscribed!')
      return
    }

    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
    inputEl.current.value = ''
  }

  return (
    <Flex direction="column" as="form" id="NewsLletterForm" onSubmit={subscribe} py="4rem">
      <Heading as="h2" pb="1rem" fontSize={['xl']} color="black">
        {title}
      </Heading>
      <InputGroup>
        <Input
          borderColor="black"
          autoComplete="email"
          id="email-input"
          name="email"
          placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
          ref={inputEl}
          required
          type="email"
          disabled={subscribed}
        />
        <InputRightElement w="auto">
          <Button
            colorScheme="teal"
            varient="solid"
            type="submit"
            size="sm"
            mr="2"
            rounded={'full'}
            fontWeight={'normal'}
            px={6}
            bg={'teal.400'}
            _hover={{ bg: 'teal.500' }}
            my="4"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Sign up'}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">{message}</div>
      )}
    </Flex>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <Flex align="center" justify="center">
    <Box p="6">
      <NewsletterForm title={title} />
    </Box>
  </Flex>
)
