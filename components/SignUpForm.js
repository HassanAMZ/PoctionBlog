import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebaseAuth'
import { useRouter } from 'next/router'

const SignUpForm = () => {
  const [user, setUser] = useState({})

  const router = useRouter()

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
      const user = await createUserWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  return (
    <Box w={['full', '75%']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name && errors.email && errors.password}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="name"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
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
          Sign Up
        </Button>
      </form>
    </Box>
  )
}

export default SignUpForm
