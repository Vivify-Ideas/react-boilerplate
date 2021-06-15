import React from 'react'
import { Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { PageHeader } from '../components/Layout/PageHeader'

export default function HomePage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <PageHeader.Title>{t('welcome_page.heading')}</PageHeader.Title>
        <PageHeader.Description>
          <Text>{t('welcome_page.subheading')}</Text>
        </PageHeader.Description>
      </PageHeader>
    </>
  )
}
