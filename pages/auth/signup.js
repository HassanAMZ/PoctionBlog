import Link from 'next/link'
import SignUpForm from '@/components/SignUpForm'
import { Button, Flex, Text, Heading } from '@chakra-ui/react'
import { signInWithGoogle } from '@/firebase/firebaseAuth'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

const SignUpPage = () => {
  return (
    <>
      <PageSEO title={`Sign Up - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Flex direction={'column'} justifyContent="center" alignItems="center">
        <Heading as="h2" py="3" fontSize={['xl']}>
          Sign Up
        </Heading>
        <SignUpForm />
        <Text py="4">Or</Text>
        <Button py="4" w={['full', '75%']} colorScheme="teal" onClick={signInWithGoogle}>
          Sign Up with google
        </Button>
        <Text py="4" textTransform="capitalize">
          Already have an account?
        </Text>
        <Button w={['full', '75%']} colorScheme="teal" variant="outline">
          <Link href="/auth/login">
            <a>Sign In</a>
          </Link>
        </Button>
      </Flex>
    </>
  )
}
export default SignUpPage
