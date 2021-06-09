import { Box } from '@chakra-ui/layout'
import { ReactJSXElementChildrenAttribute } from '@emotion/react/types/jsx-namespace'
import React from 'react'

export const Page = (props: { children: ReactJSXElementChildrenAttribute }) => {
  return (
    <Box w="full" h="full">
      {props.children}
    </Box>
  )
}

export default Page
