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
import { LOGIN_PAGE } from '../../constants'
import useAuth from './../../hooks/useAuth'

export default function SignUpPage(): JSX.Element {
  const { signUp, signUpError } = useAuth()
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
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: ''
          }}
          onSubmit={signUp}
          validationSchema={Yup.object({
            first_name: Yup.string().required(
              t('signup_page.validations.first_name')
            ),
            last_name: Yup.string().required(
              t('signup_page.validations.last_name')
            ),
            email: Yup.string()
              .email(t('signup_page.validations.email'))
              .required(t('signup_page.validations.email')),
            password: Yup.string().required(
              t('signup_page.validations.password')
            )
          })}
        >
          <Form>
            <FieldControl id="first_name" name="first_name">
              <FormLabel>{t('signup_page.input_label.first_name')}</FormLabel>
              <InputFormik />
              <FieldErrorMessage />
            </FieldControl>

            <FieldControl id="last_name" name="last_name">
              <FormLabel>{t('signup_page.input_label.last_name')}</FormLabel>
              <InputFormik />
              <FieldErrorMessage />
            </FieldControl>

            <FieldControl id="email" name="email">
              <FormLabel>{t('signup_page.input_label.email')}</FormLabel>
              <InputFormik />
              <FieldErrorMessage />
            </FieldControl>

            <FieldControl id="password" name="password">
              <FormLabel>{t('signup_page.input_label.password')}</FormLabel>
              <InputFormik type="password" />
              <FieldErrorMessage />
            </FieldControl>

            <FormControl isInvalid={!!signUpError}>
              <FormErrorMessage>
                {t('signup_page.validations.user_already_registered')}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="brand" width="full" mt={4}>
              {t('signup_page.button.register')}
            </Button>

            <Button type="button" variant="link" width="full">
              <Link to={LOGIN_PAGE}>{t('signup_page.link.login')}</Link>
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  )
}
