import { Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ConfirmationDialog } from '../components/Dialogs/ConfirmationDialog'
import { PageHeader } from '../components/Layout/PageHeader'

export default function SettingsPage(): JSX.Element {
  const { t } = useTranslation()
  const toast = useToast()

  return (
    <>
      <PageHeader>
        <PageHeader.Title>{t('settings_page.heading')}</PageHeader.Title>
        <PageHeader.Actions>
          {/* Just examples */}
          <Button variant="outline" mr={2}>
            Example Action
          </Button>
          <ConfirmationDialog
            title="Confirmation"
            message="Are you sure?"
            buttonComponent={props => (
              <Button variant="solid" colorScheme="red" {...props}>
                Confirmation Action
              </Button>
            )}
            onConfirm={() =>
              toast({
                title: 'Success',
                status: 'success'
              })
            }
          />
        </PageHeader.Actions>
      </PageHeader>
    </>
  )
}
