import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsResetPasswordPending } from './selectors';
import { resetPassword } from './actions';
import ResetPasswordForm from './ResetPasswordForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'resetPassword';

export function ResetPasswordPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
