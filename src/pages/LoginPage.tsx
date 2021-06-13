import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading
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
import Logo from '../components/Layout/Logo'
import { PASSWORD_RECOVERY, SIGNUP_PAGE } from '../constants'
import useAuth from '../hooks/useAuth'

export default function LoginPage(): JSX.Element {
  const { login, loginError } = useAuth()
  const { t } = useTranslation()

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
        {t('common.login')}
      </Heading>
      <Box p={8} w={['xs', 'md']} borderRadius={8}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={login}
          validationSchema={Yup.object({
            email: Yup.string()
              .email(t('common.validations.email'))
              .required(t('common.validations.email')),
            password: Yup.string().required(t('common.validations.password'))
          })}
        >
          <Form noValidate>
            <FieldControl id="email" name="email" mb={4} isRequired>
              <FormLabel>{t('common.email')}</FormLabel>
              <InputFormik placeholder={t('common.email_placeholder') || ''} />
              <FieldErrorMessage />
            </FieldControl>

            <FieldControl id="password" name="password" isRequired>
              <FormLabel>{t('common.password')}</FormLabel>
              <InputFormik
                type="password"
                placeholder={t('common.password_placeholder') || ''}
              />
              <FieldErrorMessage />
            </FieldControl>

            <FormControl isInvalid={!!loginError}>
              <FormErrorMessage>
                {t('login_page.unauthorized')}
              </FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="brand"
              width="full"
              mt={8}
              mb={8}
            >
              {t('common.login')}
            </Button>

            <Button type="button" variant="link" width="full">
              <Link to={PASSWORD_RECOVERY}>
                {t('login_page.link.password_recovery')}
              </Link>
            </Button>
            <Button type="button" variant="link" width="full">
              <Link to={SIGNUP_PAGE}>{t('login_page.link.register')}</Link>
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  )
}
