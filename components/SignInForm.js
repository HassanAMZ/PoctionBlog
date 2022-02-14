import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
} from '@chakra-ui/react'
import { auth } from '@/firebase/firebaseAuth'
import { useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

const SignInForm = () => {
  const router = useRouter()

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)

    if (currentUser === null) {
      console.log(currentUser)
    } else {
      router.push('/')
    }
  })

  const onSubmit = async ({ email, password }) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  return (
    <Box w={['full', '75%']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email && errors.password}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="email"
            {...register('email', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="password"
            {...register('password', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>
        <Button mt={4} w={['full']} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>

        <Heading as="h4" py="3" fontSize={['xl']}>
          Signed In User
        </Heading>

        <Button mt={4} w={['full']} colorScheme="teal" onClick={logout}>
          Sign Out
        </Button>
      </form>
    </Box>
  )
}

export default SignInForm
