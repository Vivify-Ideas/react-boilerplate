import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { makeSelectIsForgotPasswordPending } from 'store/auth/selectors';
import { forgotPassword } from 'store/auth/actions';
import ForgotPasswordForm from './ForgotPasswordForm';
import messages from './messages';

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const isForgotPasswordPending = useSelector(
    makeSelectIsForgotPasswordPending()
  );
  const submitForgotPasswordForm = useCallback(
    (...args) => dispatch(forgotPassword(...args)),
    [dispatch]
  );

  const { formatMessage } = useIntl();

  return (
    <main>
      <Helmet>
        <title>Forgot Password - React Boilerplate</title>
      </Helmet>
      <h1>{formatMessage(messages.forgotPasswordTitle)}</h1>
      <ForgotPasswordForm
        onSubmit={submitForgotPasswordForm}
        isPending={isForgotPasswordPending}
      />
    </main>
  );
}

export default ForgotPasswordPage;
