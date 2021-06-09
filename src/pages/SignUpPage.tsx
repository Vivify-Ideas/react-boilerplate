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
import { LOGIN_PAGE } from '../constants'
import useAuth from './../hooks/useAuth'

export default function SignUpPage(): JSX.Element {
  const { signUp, signUpError } = useAuth()
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
        {t('signup_page.title')}
      </Heading>
      <Box p={8} w={['xs', 'md']} borderRadius={8}>
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
              t('signup_page.first_name_required')
            ),
            last_name: Yup.string().required(
              t('signup_page.last_name_required')
            ),
            email: Yup.string()
              .email(t('common.validations.email'))
              .required(t('common.validations.email')),
            password: Yup.string().required(t('common.validations.password'))
          })}
        >
          <Form noValidate>
            <FieldControl id="first_name" name="first_name" mb={4} isRequired>
              <FormLabel>{t('signup_page.first_name')}</FormLabel>
              <InputFormik
                placeholder={t('signup_page.first_name_placeholder') || ''}
              />
              <FieldErrorMessage />
            </FieldControl>

            <FieldControl id="last_name" name="last_name" mb={4} isRequired>
              <FormLabel>{t('signup_page.last_name')}</FormLabel>
              <InputFormik
                placeholder={t('signup_page.last_name_placeholder') || ''}
              />
              <FieldErrorMessage />
            </FieldControl>

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

            <FormControl isInvalid={!!signUpError}>
              <FormErrorMessage>
                {t(
                  'signup_page.validations.user_already_registered_validation'
                )}
              </FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="brand"
              width="full"
              mt={8}
              mb={8}
            >
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
