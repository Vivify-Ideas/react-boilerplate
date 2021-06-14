import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks'
import { Box, Stack } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React, { createContext } from 'react'
import useAuth from '../../hooks/useAuth'
import Navbar from './Navbar'
import Page from './Page'
import Sidebar from './Sidebar'
import MobileSidebar from './Sidebar/MobileSidebar'

export const NavContext = createContext<
  | UseDisclosureReturn
  | { isOpen?: boolean; onClose: () => void; onToggle: () => void }
>({ isOpen: false, onClose: () => {}, onToggle: () => {} })

export const DefaultLayout = ({
  children
}: React.PropsWithChildren<unknown>) => {
  const { user } = useAuth()
  const sidebarState = useDisclosure()
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)')
  return user ? (
    <NavContext.Provider value={sidebarState}>
      <Box textStyle="light">
        <Navbar />
        <Box pos="relative" h="max-content" m={[2, '', 5]}>
          <Stack direction="row" spacing={{ md: 5 }}>
            <Sidebar />
            {isSmallScreen && <MobileSidebar />}
            <Page>{children}</Page>
          </Stack>
        </Box>
      </Box>
    </NavContext.Provider>
  ) : (
    <Page>{children}</Page>
  )
}

export default DefaultLayout
