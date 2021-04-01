import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from './validations';

export default function RegisterForm({ onSubmit, isPending }) {
  const { t } = useTranslation();

  const handleOnSubmit = (values, { setErrors }) => {
    const { firstName, lastName, email, password } = values;
    onSubmit(firstName, lastName, email, password, setErrors);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="firstName">
            {t('register_page.input_label.first_name')}
          </label>
          <Field type="text" name="firstName" required autoFocus />
          <ErrorMessage name="firstName">
            {(msg) =>
              t(msg, {
                label: t('register_page.input_label.first_name'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="lastName">
            {t('register_page.input_label.last_name')}
          </label>
          <Field type="text" name="lastName" required />
          <ErrorMessage name="lastName">
            {(msg) =>
              t(msg, {
                label: t('register_page.input_label.last_name'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="email">{t('register_page.input_label.email')}</label>
          <Field type="email" name="email" required />
          <ErrorMessage name="email">
            {(msg) =>
              t(msg, {
                label: t('register_page.input_label.email'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="password">
            {t('register_page.input_label.password')}
          </label>
          <Field type="password" name="password" required />
          <ErrorMessage name="password">
            {(msg) =>
              t(msg, {
                label: t('register_page.input_label.password'),
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {t('register_page.button.register')}
        </button>
      </Form>
    </Formik>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
