import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { resetPasswordSchema } from './validations';

export default function ResetPasswordForm({ onSubmit, isPending }) {
  const { t } = useTranslation();

  const handleOnSubmit = (values, { setErrors }) => {
    const { password, passwordConfirmation } = values;
    onSubmit(password, passwordConfirmation, setErrors);
  };

  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={resetPasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="password">
            {t('reset_password_page.input_label.password')}
          </label>
          <Field type="password" name="password" required autoFocus />
          <ErrorMessage name="password">
            {(msg) =>
              t(msg, {
                label: t('reset_password_page.input_label.password'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="passwordConfirmation">
            {t('reset_password_page.input_label.password_confirmation')}
          </label>
          <Field type="password" name="passwordConfirmation" required />
          <ErrorMessage name="passwordConfirmation">
            {(msg) =>
              t(msg, {
                label: t('reset_password_page.input_label.password'),
                value: t(
                  'reset_password_page.input_label.password_confirmation'
                ),
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {t('reset_password_page.button.reset_password')}
        </button>
      </Form>
    </Formik>
  );
}

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
