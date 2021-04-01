import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { makeSelectIsForgotPasswordPending } from 'store/auth/selectors';
import { forgotPassword } from 'store/auth/actions';
import ForgotPasswordForm from './ForgotPasswordForm';

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const isForgotPasswordPending = useSelector(
    makeSelectIsForgotPasswordPending()
  );
  const submitForgotPasswordForm = useCallback(
    (...args) => dispatch(forgotPassword(...args)),
    [dispatch]
  );

  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>Forgot Password - React Boilerplate</title>
      </Helmet>
      <h1>{t('forgot_password_page.text.forgot_password_title')}</h1>
      <ForgotPasswordForm
        onSubmit={submitForgotPasswordForm}
        isPending={isForgotPasswordPending}
      />
    </main>
  );
}

export default ForgotPasswordPage;
