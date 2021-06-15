import { Flex, Stack, Text } from '@chakra-ui/layout'
import React, { ReactElement, ReactNode } from 'react'

type JustChild = { children?: ReactNode }
type PageHeader = {
  Title: typeof Title
  Description: typeof Description
  Actions: typeof Actions
}

const Title = ({ children }: JustChild) => (
  <Text mr="auto" textStyle="default" fontSize="2xl" fontWeight="semibold">
    {children}
  </Text>
)

const Description = ({ children }: JustChild) => (
  <Stack mr="auto">{children}</Stack>
)

const Actions = ({ children }: JustChild) => <Flex ml="auto">{children}</Flex>

export const PageHeader: React.FC & PageHeader = ({ children }: JustChild) => {
  const getChild = (component: ReactNode) =>
    React.Children.map(
      children,
      child => (child as ReactElement)?.type === component && child
    )

  return (
    <Flex w="full" direction="column">
      <Stack direction={{ base: 'column', xl: 'row' }}>
        {getChild(Title)}
        {getChild(Actions)}
      </Stack>
      <Stack direction={{ base: 'column', xl: 'row' }}>
        {getChild(Description)}
      </Stack>
    </Flex>
  )
}

PageHeader.Title = Title
PageHeader.Description = Description
PageHeader.Actions = Actions

export default PageHeader
