import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateUserSchema } from './validations';
import ImageField from './ImageField';

export default function UpdateUserForm({ user, onSubmit, isPending }) {
  const { t } = useTranslation();

  function handleOnSubmit(values, { setErrors }) {
    const { firstName, lastName, avatar } = values;
    onSubmit(firstName, lastName, avatar, setErrors);
  }

  return (
    <Formik
      initialValues={{
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        avatar: user.avatar || null,
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
              {t('user_profile.input_label.first_name')}
            </label>
            <Field type="text" name="firstName" required autoFocus />
            <ErrorMessage name="firstName">
              {(msg) =>
                t(msg, {
                  label: t('user_profile.input_label.first_name'),
                })
              }
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="lastName">
              {t('user_profile.input_label.last_name')}
            </label>
            <Field type="text" name="lastName" required />
            <ErrorMessage name="lastName">
              {(msg) =>
                t(msg, {
                  label: t('user_profile.input_label.last_name'),
                })
              }
            </ErrorMessage>
          </div>
          <button disabled={isPending} type="submit">
            {t('user_profile.button.update')}
          </button>
        </Form>
      )}
    </Formik>
  );
}

UpdateUserForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
