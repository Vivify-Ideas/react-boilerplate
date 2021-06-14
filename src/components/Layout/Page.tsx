import { Box } from '@chakra-ui/layout'
import { BoxProps } from '@chakra-ui/react'
import React from 'react'

export const Page = ({
  children,
  ...boxProps
}: React.PropsWithChildren<BoxProps>) => {
  return (
    <Box w="full" h="full" {...boxProps}>
      {children}
    </Box>
  )
}

export default Page
