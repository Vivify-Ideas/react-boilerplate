import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#9a91f4',
    100: '#8e83f5',
    200: '#8175f6',
    300: '#7467f6',
    400: '#6658f6',
    500: '#6658f6',
    600: '#594af8',
    700: '#4b3bf9',
    800: '#3a29fa',
    900: '#220dfb'
  }
}
export const theme = extendTheme({
  colors,
  styles: {
    global: {
      '#root': {
        height: '100vh',
        width: '100vw'
      }
    }
  }
})
