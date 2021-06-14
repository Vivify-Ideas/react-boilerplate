import { Flex, Stack, Text } from '@chakra-ui/layout'
import { FlexProps, TextProps } from '@chakra-ui/react'
import React from 'react'

type PageHeader = {
  Title: typeof Title
  Description: typeof Description
  Actions: typeof Actions
}

const PageHeader = ({
  children
}: React.PropsWithChildren<FlexProps & PageHeader>) => {
  const getChild = (type: string) =>
    React.Children.map(
      children,
      child => (child as { type: { name: string } }).type.name === type && child
    )
  return (
    <Flex w="full" direction="column">
      {getChild('Title')}
      <Stack direction={{ base: 'column', xl: 'row' }}>
        {getChild('Description')}
        {getChild('Actions')}
      </Stack>
    </Flex>
  )
}

const Title = ({
  children,
  ...textProps
}: React.PropsWithChildren<TextProps>) => {
  return (
    <Text
      textStyle="default"
      fontSize="2xl"
      fontWeight="semibold"
      {...textProps}
    >
      {children}
    </Text>
  )
}

const Description = ({
  children,
  ...textProps
}: React.PropsWithChildren<TextProps>) => {
  return (
    <Text mr="auto" {...textProps}>
      {children}
    </Text>
  )
}

const Actions = ({
  children,
  ...flexProps
}: React.PropsWithChildren<FlexProps>) => {
  return (
    <Flex ml="auto" {...flexProps}>
      {children}
    </Flex>
  )
}

PageHeader.Title = Title
PageHeader.Description = Description
PageHeader.Actions = Actions

export default PageHeader
