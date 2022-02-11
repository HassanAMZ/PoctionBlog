import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = {
  ...chakraTheme.fonts,
  heading: 'Open Sans',
  body: 'Raleway',
}
const theme = extendTheme({ config, fonts })

export default theme
