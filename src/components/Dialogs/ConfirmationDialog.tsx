import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonProps
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export interface ConfirmationDialogProps {
  title: string
  message: string
  buttonComponent: React.FC<ButtonProps>
  onCancel?: () => void
  onConfirm?: () => void
}

export const ConfirmationDialog = ({
  title,
  message,
  onCancel = () => {},
  onConfirm = () => {},
  buttonComponent: ButtonComponent
}: ConfirmationDialogProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  const handleCancel = () => {
    onCancel()
    toggleModal()
  }
  const handleConfirm = () => {
    onConfirm()
    toggleModal()
  }

  const cancelRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <ButtonComponent onClick={() => toggleModal()} />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleCancel}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
            <AlertDialogBody>{message}</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleCancel}>
                {t('common.cancel')}
              </Button>
              <Button colorScheme="green" onClick={handleConfirm} ml={3}>
                {t('common.confirm')}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
