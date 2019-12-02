import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { changePasswordSchema } from './validations';
import messages from './messages';

export default function ChangePasswordForm({ onSubmit, isPending }) {
  const { formatMessage } = useIntl();

  function handleOnSubmit(values, { setErrors, resetForm }) {
    const { currentPassword, newPassword, newPasswordConfirmation } = values;
    onSubmit(
      currentPassword,
      newPassword,
      newPasswordConfirmation,
      setErrors,
      resetForm
    );
  }

  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      }}
      validationSchema={changePasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="currentPassword">
            {formatMessage(messages.currentPasswordInputLabel)}
          </label>
          <Field type="password" name="currentPassword" required />
          <ErrorMessage name="currentPassword">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.currentPasswordInputLabel)
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="newPassword">
            {formatMessage(messages.newPasswordInputLabel)}
          </label>
          <Field type="password" name="newPassword" required />
          <ErrorMessage name="newPassword">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.newPasswordInputLabel)
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="newPasswordConfirmation">
            {formatMessage(messages.newPasswordConfirmationInputLabel)}
          </label>
          <Field type="password" name="newPasswordConfirmation" required />
          <ErrorMessage name="newPasswordConfirmation">
            {msg =>
              formatMessage(msg, {
                label: formatMessage(messages.newPasswordConfirmation)
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {formatMessage(messages.changePasswordButton)}
        </button>
      </Form>
    </Formik>
  );
}

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
