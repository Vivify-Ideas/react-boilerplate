import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { forgotPasswordSchema } from './validations';

function ForgotPasswordForm({ onSubmit, isPending }) {
  const handleOnSubmit = (values, { setErrors }) => {
    const { email } = values;
    onSubmit(email, setErrors);
  };

  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">
            {t('forgot_password_page.input_label.email')}
          </label>
          <Field type="email" name="email" required autoFocus />
          <ErrorMessage name="email">
            {(msg) =>
              t(msg, {
                label: t('forgot_password_page.input_label.email'),
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {t('forgot_password_page.button.reset_password')}
        </button>
      </Form>
    </Formik>
  );
}

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};

export default ForgotPasswordForm;
