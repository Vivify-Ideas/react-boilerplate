import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text
} from '@chakra-ui/react'
import {
  FieldControl,
  FieldErrorMessage,
  InputFormik
} from 'chakra-formik-experiment'
import { Form, Formik } from 'formik'
import React from 'react'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import { useStartPasswordRecoveryMutation } from '../../queries/auth'
import Logo from '../Layout/Logo'

export default function PasswordRecoveryInitialStep(): JSX.Element {
  const { t } = useTranslation()
  const {
    mutate: startPasswordRecovery,
    isError,
    isLoading,
    isSuccess
  } = useStartPasswordRecoveryMutation()

  return (
    <Flex
      width="full"
      minH="full"
      align="center"
      justifyContent="center"
      direction="column"
    >
      <Logo mb={10} />
      <Heading size="md" mb={12}>
        {t('password_recovery.title')}
      </Heading>
      <Box p={8} w={['xs', 'md']} borderRadius={8}>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={values => startPasswordRecovery(values)}
          validationSchema={Yup.object({
            email: Yup.string()
              .email(t('common.validations.email'))
              .required(t('common.validations.email'))
          })}
        >
          <Form noValidate>
            <FieldControl id="email" name="email" mb={4} isRequired>
              <FormLabel>{t('common.email')}</FormLabel>
              <InputFormik placeholder={t('common.email_placeholder') || ''} />
              <FieldErrorMessage />
            </FieldControl>

            <FormControl isInvalid={isError}>
              <FormErrorMessage>
                {t('password_recovery.error_message')}
              </FormErrorMessage>
            </FormControl>

            {isSuccess && (
              <Text color="green.500">
                {t('password_recovery.success_message')}
              </Text>
            )}

            <Button
              type="submit"
              colorScheme="brand"
              width="full"
              mt={8}
              isDisabled={isLoading || isSuccess}
            >
              {t('common.submit')}
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  )
}
