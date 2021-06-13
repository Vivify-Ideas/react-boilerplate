import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HomePage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Container>
      <Heading>{t('welcome_page.heading')}</Heading>
      <Heading size="md">{t('welcome_page.subheading')}</Heading>
    </Container>
  )
}
