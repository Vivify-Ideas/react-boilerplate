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
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { LOGIN_PAGE } from '../../constants'
import { useConfirmPasswordRecoveryMutation } from '../../queries/auth'
import Logo from '../Layout/Logo'

export default function PasswordRecoveryLastStep({
  token
}: {
  token: string
}): JSX.Element {
  const { t } = useTranslation()
  const {
    mutate: confirmPasswordChange,
    isLoading,
    isSuccess,
    isError
  } = useConfirmPasswordRecoveryMutation()

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
        {t('password_recovery.last_step.title')}
      </Heading>
      <Box p={8} w={['xs', 'md']} borderRadius={8}>
        {isSuccess && (
          <>
            <Text color="green.500" textAlign="center">
              {t('password_recovery.last_step.success_message')}
            </Text>
            <Button type="button" variant="link" width="full" mt={4}>
              <Link to={LOGIN_PAGE}>{t('common.login')}</Link>
            </Button>
          </>
        )}
        {!isSuccess && (
          <Formik
            initialValues={{ password: '', password_confirmation: '' }}
            onSubmit={values => confirmPasswordChange({ token, ...values })}
            validationSchema={Yup.object({
              password: Yup.string().required(t('common.validations.password')),
              password_confirmation: Yup.string()
                .oneOf(
                  [Yup.ref('password'), null],
                  t(
                    'password_recovery.last_step.confirmation_password_matching_issue'
                  )
                )
                .required(
                  t(
                    'password_recovery.last_step.confirmation_password_required'
                  )
                )
            })}
          >
            <Form noValidate>
              <FieldControl id="password" name="password" mb={4} isRequired>
                <FormLabel>{t('common.password')}</FormLabel>
                <InputFormik
                  type="password"
                  placeholder={t('common.password_placeholder') || ''}
                />
                <FieldErrorMessage />
              </FieldControl>

              <FieldControl
                id="password_confirmation"
                name="password_confirmation"
                isRequired
              >
                <FormLabel>
                  {t('password_recovery.last_step.confirmation_password')}
                </FormLabel>
                <InputFormik
                  type="password"
                  placeholder={
                    t(
                      'password_recovery.last_step.confirmation_password_placeholder'
                    ) || ''
                  }
                />
                <FieldErrorMessage />
              </FieldControl>

              <FormControl isInvalid={isError}>
                <FormErrorMessage>{t('common.oops')}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="brand"
                width="full"
                mt={8}
                isDisabled={isSuccess || isLoading}
              >
                {t('common.submit')}
              </Button>
            </Form>
          </Formik>
        )}
      </Box>
    </Flex>
  )
}
