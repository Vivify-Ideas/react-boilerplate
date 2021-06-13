import { Icon, IconButton } from '@chakra-ui/react'
import { MenuOpen, Menu } from '@material-ui/icons'
import React, { useContext } from 'react'
import { NavContext } from '..'

const NavButton = () => {
  const { onToggle, isOpen } = useContext(NavContext)
  const icon = isOpen ? Menu : MenuOpen
  return (
    <IconButton
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      onClick={onToggle}
    />
  )
}

export default NavButton
