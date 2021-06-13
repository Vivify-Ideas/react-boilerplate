import { BoxProps } from '@chakra-ui/react'
import { mode } from './modes'

type textStyles = { [key: string]: BoxProps | unknown }

export const textStyles: textStyles = {
  stroke: {
    color: 'transparent',
    WebkitTextStrokeColor: 'white',
    WebkitTextStrokeWidth: '1px'
  },
  default: {
    ...mode('color', 'black', 'white')
  },
  light: {
    ...mode('color', 'gray.600', 'gray.400')
  }
}
