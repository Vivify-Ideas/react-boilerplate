import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from './validations';
import messages from './messages';

export default function LoginForm({ onSubmit, isPending }) {
  const handleOnSubmit = values => {
    const { email, password } = values;
    onSubmit(email, password);
  };

  const { formatMessage } = useIntl();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={loginSchema}
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
        <div>
          <label htmlFor="password">
            {formatMessage(messages.passwordInputLabel)}
          </label>
          <Field type="password" name="password" required />
          <ErrorMessage name="password">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.passwordInputLabel)
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {formatMessage(messages.loginButton)}
        </button>
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
