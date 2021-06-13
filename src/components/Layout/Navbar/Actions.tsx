import { IconButton, IconButtonProps } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { Box, Stack, StackProps } from '@chakra-ui/layout'
import { SlideFade } from '@chakra-ui/transition'
import { Menu, MenuOpen } from '@material-ui/icons'
import React from 'react'
// import Profile from './Profile'
import { ThemeToggle } from './ThemeToggle'

const Actions = () => {
  const { onToggle, isOpen } = useDisclosure()
  return (
    <>
      <ActionsList display={['none', '', 'flex']} />
      <ActionsButton onClick={onToggle} isOpen={isOpen} />
      <Box pos="absolute" insetX="5" top="5rem" zIndex="overlay">
        <SlideFade in={isOpen} offsetY="90px">
          <ActionsList
            p={5}
            justify="center"
            rounded="3xl"
            shadow="lg"
            layerStyle="neutral"
            justifyContent="space-between"
            display={['flex', '', 'none']}
          />
        </SlideFade>
      </Box>
    </>
  )
}

const ActionsList = (props: StackProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={[2, '', 6]} {...props}>
      <ThemeToggle />
      {/* <Profile /> */}
    </Stack>
  )
}

export default Actions

const ActionsButton = (
  props: Omit<IconButtonProps, 'aria-label'> & { isOpen: boolean }
) => {
  const { isOpen, ...rest } = props
  const icon = isOpen ? Menu : MenuOpen
  return (
    <IconButton
      display={{ md: 'none' }}
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      {...rest}
      aria-label="Toggle Actions"
    />
  )
}
