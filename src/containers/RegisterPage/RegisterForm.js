import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from './validations';
import messages from './messages';

export default function RegisterForm({ onSubmit, isPending }) {
  const { formatMessage } = useIntl();

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
        password: ''
      }}
      validationSchema={registerSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="firstName">
            {formatMessage(messages.firstNameInputLabel)}
          </label>
          <Field type="text" name="firstName" required autoFocus />
          <ErrorMessage name="firstName">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.firstNameInputLabel)
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="lastName">
            {formatMessage(messages.lastNameInputField)}
          </label>
          <Field type="text" name="lastName" required />
          <ErrorMessage name="lastName">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.lastNameInputField)
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="email">
            {formatMessage(messages.emailInputLabel)}
          </label>
          <Field type="email" name="email" required />
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
          {formatMessage(messages.registerButton)}
        </button>
      </Form>
    </Formik>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
