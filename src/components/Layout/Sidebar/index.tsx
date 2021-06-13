import { Divider, Spacer, Stack } from '@chakra-ui/layout'
import { ExitToApp } from '@material-ui/icons'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { NavContext } from '..'
import { SIDEBAR_ROUTES } from '../../../constants'
import useAuth from '../../../hooks/useAuth'
import CollapsedItem from './CollapsedItem'
import NavItem from './NavItem'

const Sidebar = () => {
  const router = useLocation()
  const { logout } = useAuth()
  const { t } = useTranslation()
  const { isOpen } = useContext(NavContext)
  const NavAction = isOpen ? CollapsedItem : NavItem
  return (
    <Stack
      layerStyle="card"
      rounded="xl"
      w={isOpen ? '60px' : '300px'}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      spacing={2}
      fontSize="sm"
      display={['none', '', 'initial']}
      overflowX={isOpen ? 'initial' : 'clip'}
    >
      {SIDEBAR_ROUTES.map((route, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={router.pathname === route.href}
          {...route}
        />
      ))}
      <Spacer />
      <Divider display={{ md: 'none' }} />
      <NavAction name={t('common.logout')} icon={ExitToApp} onClick={logout} />
    </Stack>
  )
}

export default Sidebar
