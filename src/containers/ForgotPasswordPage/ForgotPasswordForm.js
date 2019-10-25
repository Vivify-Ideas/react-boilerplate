import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { forgotPasswordSchema } from './validations';
import messages from './messages';

function ForgotPasswordForm({ onSubmit, isPending }) {
  const handleOnSubmit = (values, { setErrors }) => {
    const { email } = values;
    onSubmit(email, setErrors);
  };

  const { formatMessage } = useIntl();

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">
            {formatMessage(messages.emailInputLabel)}
          </label>
          <Field type="email" name="email" required autoFocus />
          <ErrorMessage name="email">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.emailInputLabel)
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

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};

export default ForgotPasswordForm;
