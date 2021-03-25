import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { makeSelectIsResetPasswordPending } from 'store/auth/selectors';
import { resetPassword } from 'store/auth/actions';
import ResetPasswordForm from './ResetPasswordForm';
import messages from './messages';

export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const isResetPasswordPending = useSelector(
    makeSelectIsResetPasswordPending()
  );
  const submitResetPasswordForm = useCallback(
    (...args) => dispatch(resetPassword(...args)),
    [dispatch]
  );

  const { formatMessage } = useIntl();

  return (
    <main>
      <Helmet>
        <title>Reset Password - React Boilerplate</title>
      </Helmet>
      <h1>{formatMessage(messages.resetPasswordTitle)}</h1>
      <ResetPasswordForm
        onSubmit={submitResetPasswordForm}
        isPending={isResetPasswordPending}
      />
    </main>
  );
}

export default ResetPasswordPage;
