import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { changePasswordSchema } from './validations';

export default function ChangePasswordForm({ onSubmit, isPending }) {
  const { t } = useTranslation();

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
        newPasswordConfirmation: '',
      }}
      validationSchema={changePasswordSchema}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <div>
          <label htmlFor="currentPassword">
            {t('user_profile.input_label.current_password')}
          </label>
          <Field type="password" name="currentPassword" required />
          <ErrorMessage name="currentPassword">
            {(msg) =>
              t(msg, {
                label: t('user_profile.input_label.current_password'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="newPassword">
            {t('user_profile.input_label.new_password')}
          </label>
          <Field type="password" name="newPassword" required />
          <ErrorMessage name="newPassword">
            {(msg) =>
              t(msg, {
                label: t('user_profile.input_label.new_password'),
              })
            }
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor="newPasswordConfirmation">
            {t('user_profile.input_label.new_password_confirmation')}
          </label>
          <Field type="password" name="newPasswordConfirmation" required />
          <ErrorMessage name="newPasswordConfirmation">
            {(msg) =>
              t(msg, {
                label: t('user_profile.input_label.new_password'),
                value: t('user_profile.input_label.new_password_confirmation'),
              })
            }
          </ErrorMessage>
        </div>
        <button disabled={isPending} type="submit">
          {t('user_profile.button.change_password')}
        </button>
      </Form>
    </Formik>
  );
}

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool,
};
