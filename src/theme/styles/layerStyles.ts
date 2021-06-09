import { BoxProps } from '@chakra-ui/react'
import { mode } from './modes'

type layerStyles = Record<string, BoxProps | any>
export const layerStyles: layerStyles = {
  card: {
    ...mode('bg', 'white', 'whiteAlpha.200')
  },
  'card-dark': {
    ...mode('bg', 'white', 'whiteAlpha.50')
  },
  neutral: {
    ...mode('bg', 'gray.50', 'bg.800')
  }
}
