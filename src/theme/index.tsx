import {
  ChakraProvider,
  ChakraProviderProps,
  extendTheme
} from '@chakra-ui/react'
import * as React from 'react'
import Fonts from './foundations/fonts'
import { overrides } from './overrides'

const theme = extendTheme(overrides)

export const Theme = ({ children }: ChakraProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  )
}

export default Theme
