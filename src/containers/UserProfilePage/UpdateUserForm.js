import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateUserSchema } from './validations';
import messages from './messages';
import ImageField from './ImageField';

export default function UpdateUserForm({ user, onSubmit, isPending }) {
  const { formatMessage } = useIntl();

  function handleOnSubmit(values, { setErrors }) {
    const { firstName, lastName, avatar } = values;
    onSubmit(firstName, lastName, avatar, setErrors);
  }

  return (
    <Formik
      initialValues={{
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        avatar: user.avatar || null
      }}
      validationSchema={updateUserSchema}
      onSubmit={handleOnSubmit}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form>
          <Field
            component={ImageField}
            name="avatar"
            setFieldValue={setFieldValue}
          />
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
              {formatMessage(messages.lastNameInputLabel)}
            </label>
            <Field type="text" name="lastName" required />
            <ErrorMessage name="lastName">
              {msg =>
                formatMessage(msg, {
                  label: formatMessage(messages.lastNameInputLabel)
                })
              }
            </ErrorMessage>
          </div>
          <button disabled={isPending} type="submit">
            {formatMessage(messages.updateButton)}
          </button>
        </Form>
      )}
    </Formik>
  );
}

UpdateUserForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
