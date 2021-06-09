import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Brightness3, WbSunny } from '@material-ui/icons'
import React from 'react'

export const ThemeToggle = () => {
  const SwitchIcon = useColorModeValue(Brightness3, WbSunny)
  const text = useColorModeValue('dark', 'light')
  const { toggleColorMode: toggleMode } = useColorMode()
  return (
    <IconButton
      size="sm"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      title={`Switch to ${text} mode`}
      variant="ghost"
      onClick={toggleMode}
      icon={<SwitchIcon />}
    />
  )
}
