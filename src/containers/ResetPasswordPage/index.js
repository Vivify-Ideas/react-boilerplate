import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { makeSelectIsResetPasswordPending } from 'store/auth/selectors';
import { resetPassword } from 'store/auth/actions';
import ResetPasswordForm from './ResetPasswordForm';

export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const isResetPasswordPending = useSelector(
    makeSelectIsResetPasswordPending()
  );
  const submitResetPasswordForm = useCallback(
    (...args) => dispatch(resetPassword(...args)),
    [dispatch]
  );

  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>Reset Password - React Boilerplate</title>
      </Helmet>
      <h1>{t('reset_password_page.text.reset_password_title')}</h1>
      <ResetPasswordForm
        onSubmit={submitResetPasswordForm}
        isPending={isResetPasswordPending}
      />
    </main>
  );
}

export default ResetPasswordPage;
