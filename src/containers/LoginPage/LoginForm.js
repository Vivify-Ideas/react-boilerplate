import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from './validations';

export default function LoginForm({ onSubmit, isPending }) {
  const handleOnSubmit = (values) => {
    const { email, password } = values;
    onSubmit(email, password);
  };

  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">{t('login_page.input_label.email')}</label>
          <Field type="email" name="email" required autoFocus />
          <ErrorMessage name="email">
            {(msg) =>
              t(msg, {
                label: t('login_page.input_label.email'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="password">
            {t('login_page.input_label.password')}
          </label>
          <Field type="password" name="password" required />
          <ErrorMessage name="password">
            {(msg) =>
              t(msg, {
                label: t('login_page.input_label.password'),
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {t('login_page.button.login')}
        </button>
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
