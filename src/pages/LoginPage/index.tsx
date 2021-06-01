import { Button } from '@chakra-ui/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/form-control'
import { Box, Flex } from '@chakra-ui/layout'
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
import { SIGNUP_PAGE } from '../../constants'
import useAuth from './../../hooks/useAuth'

export default function LoginPage(): JSX.Element {
  const { login, loginError } = useAuth()
  const { t } = useTranslation()

  return (
    <Flex width="full" minH="full" align="center" justifyContent="center">
      <Box
        p={8}
        minWidth="300px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={login}
          validationSchema={Yup.object({
            email: Yup.string()
              .email(t('login_page.validations.email'))
              .required(t('login_page.validations.email')),
            password: Yup.string().required(
              t('login_page.validations.password')
            )
          })}
        >
          <Form>
            <FieldControl id="email" name="email">
              <FormLabel>{t('login_page.input_label.email')}</FormLabel>
              <InputFormik />
              <FieldErrorMessage />
            </FieldControl>

            <FieldControl id="password" name="password">
              <FormLabel>{t('login_page.input_label.password')}</FormLabel>
              <InputFormik type="password" />
              <FieldErrorMessage />
            </FieldControl>
            <FormControl isInvalid={!!loginError}>
              <FormErrorMessage>
                {t('login_page.unauthorized')}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="brand" width="full" mt={4}>
              {t('login_page.button.login')}
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
