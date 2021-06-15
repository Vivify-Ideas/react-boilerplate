import { Button } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageHeader } from '../components/Layout/PageHeader'

export default function SettingsPage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <PageHeader.Title>{t('settings_page.heading')}</PageHeader.Title>
        <PageHeader.Actions>
          {/* Just an example */}
          <Button variant="outline">Example Action</Button>
        </PageHeader.Actions>
      </PageHeader>
    </>
  )
}
