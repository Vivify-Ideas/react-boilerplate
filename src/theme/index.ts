import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#b7a9ce',
    100: '#a594c2',
    200: '#8169a9',
    300: '#6f549d',
    400: '#5d3f91',
    500: '#4c2a85',
    600: '#442577',
    700: '#3c216a',
    800: '#351d5d',
    900: '#2d194f'
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
