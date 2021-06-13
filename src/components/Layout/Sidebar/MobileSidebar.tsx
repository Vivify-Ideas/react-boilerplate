import { Stack } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay
} from '@chakra-ui/modal'
import { ExitToApp } from '@material-ui/icons'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { NavContext } from '..'
import { SIDEBAR_ROUTES } from '../../../constants'
import useAuth from '../../../hooks/useAuth'
import NavItem from './NavItem'
import SectionDivider from './SectionDivider'

export const MobileSidebar = () => {
  const router = useLocation()
  const { t } = useTranslation()
  const { logout } = useAuth()
  const { isOpen, onClose } = useContext(NavContext)

  return (
    <Drawer isOpen={isOpen || false} onClose={onClose} placement="left">
      <DrawerOverlay display={['initial', '', 'none']}>
        <DrawerContent layerStyle="neutral" py={8}>
          <Stack spacing={2} fontSize="sm">
            <DrawerCloseButton />

            {SIDEBAR_ROUTES.map((route, rid) => (
              <NavItem
                key={`nav-item-${rid}`}
                active={router.pathname === route.href}
                {...route}
              />
            ))}
            <SectionDivider />
            <NavItem
              name={t('common.logout')}
              icon={ExitToApp}
              onClick={logout}
            />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default MobileSidebar
