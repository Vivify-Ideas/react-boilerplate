import { Flex, Spacer, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { SIDEBAR_ROUTES } from '../../../constants'
import Actions from './Actions'
import Info from './Info'
import NavButton from './NavButton'

const Navbar = () => {
  const router = useLocation()

  const getRoute = () => {
    return SIDEBAR_ROUTES.find(({ href }) => router.pathname === href)?.name
  }

  return (
    <Flex
      layerStyle="card"
      h="4.5rem"
      roundedBottom={['none', 'none', '2xl']}
      alignItems="center"
      p={5}
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, '', 8]}>
        <Info display={['none', '', 'flex']} />
        <NavButton />

        <Spacer display={{ md: 'none' }} />
        <Text
          textStyle="default"
          fontSize="xl"
          fontWeight="semibold"
          fontFamily="cursive"
          display={{ md: 'none' }}
        >
          {getRoute()}
        </Text>
        <Spacer />
        <Actions />
      </Stack>
    </Flex>
  )
}

export default Navbar
