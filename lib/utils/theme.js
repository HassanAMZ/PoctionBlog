import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  ...chakraTheme.fonts,
  body: 'Raleway, sans-serif',
  heading: 'Raleway, sans-serif',
}

const theme = extendTheme({ config, fonts })

export default theme
