import { Container } from '@chakra-ui/layout'
import { Button, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import useAuth from './../../hooks/useAuth'

export default function HomePage(): JSX.Element {
  const { user, logout } = useAuth()
  const { t } = useTranslation()

  return (
    <Container>
      <Heading>{t('welcome_page.heading')}</Heading>
      <Heading size="md">{t('welcome_page.subheading')}</Heading>

      <Divider width="full" mt={4} mb={4} />

      <Button onClick={logout}>{t('welcome_page.link.logout')}</Button>
    </Container>
  )
}
