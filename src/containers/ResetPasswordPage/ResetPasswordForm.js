import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { resetPasswordSchema } from './validations';
import messages from './messages';

export default function ResetPasswordForm({ onSubmit, isPending }) {
  const { formatMessage } = useIntl();

  const handleOnSubmit = (values, { setErrors }) => {
    const { password, passwordConfirmation } = values;
    onSubmit(password, passwordConfirmation, setErrors);
  };

  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={resetPasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="password">
            {formatMessage(messages.passwordInputLabel)}
          </label>
          <Field type="password" name="password" required autoFocus />
          <ErrorMessage name="password">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.passwordInputLabel)
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="passwordConfirmation">
            {formatMessage(messages.passwordConfirmationInputLabel)}
          </label>
          <Field type="password" name="passwordConfirmation" required />
          <ErrorMessage name="passwordConfirmation">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.passwordConfirmationInputLabel)
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {formatMessage(messages.resetPasswordButton)}
        </button>
      </Form>
    </Formik>
  );
}

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
