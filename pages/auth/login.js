import Link from 'next/link'
import SignInForm from '@/components/SignInForm'
import { signInWithGoogle } from '@/firebase/firebaseAuth'
import { Button, Heading, Flex, Text } from '@chakra-ui/react'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

const LoginPage = () => {
  return (
    <>
      <PageSEO title={`Sign In - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Flex direction={'column'} justifyContent="center" alignItems="center">
        <Heading as="h2" py="3" fontSize={['xl']}>
          Log In
        </Heading>
        <SignInForm />
        <Text py="4">Or</Text>
        <Button py="4" w={['full', '75%']} colorScheme="teal" onClick={signInWithGoogle}>
          Sign In with google
        </Button>
        <Text py="4" textTransform="capitalize">
          Do not have an account?
        </Text>
        <Button w={['full', '75%']} colorScheme="teal" variant="outline">
          <Link href="/auth/signup">
            <a>Sign Up</a>
          </Link>
        </Button>
      </Flex>
    </>
  )
}
export default LoginPage
