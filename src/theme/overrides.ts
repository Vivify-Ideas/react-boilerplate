import { ChakraTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'
import { styles } from './styles'
import { layerStyles } from './styles/layerStyles'
import { textStyles } from './styles/textStyles'

export const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

export const overrides: ThemeOverride<ChakraTheme> = {
  config,
  fonts,
  colors,
  styles,
  textStyles,
  layerStyles
}
