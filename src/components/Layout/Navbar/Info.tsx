import { Flex, Stack, StackProps } from '@chakra-ui/layout'
import React from 'react'
import { Logo } from './../Logo'

export const Info = (props: StackProps) => {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <Flex direction="column" lineHeight="5">
        <Logo />
      </Flex>
    </Stack>
  )
}

export default Info
