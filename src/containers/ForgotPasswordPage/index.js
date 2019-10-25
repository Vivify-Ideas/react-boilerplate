import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsForgotPasswordPending } from './selectors';
import { forgotPassword } from './actions';
import ForgotPasswordForm from './ForgotPasswordForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'forgotPassword';

function ForgotPasswordPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
