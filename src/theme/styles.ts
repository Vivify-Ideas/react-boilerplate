import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: never) => ({
    body: {
      fontFamily: 'body',
      bg: mode('gray.50', 'bg.900')(props),
      minH: '100%'
    },
    html: {
      minH: '100%'
    },
    '#root': {
      height: '100vh',
      width: '100vw'
    }
  })
}
