import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsSocialAuthPending } from 'containers/SocialAuth/selectors';
import { makeSelectIsRegisterPending } from './selectors';
import { register } from './actions';
import SocialAuth from 'containers/SocialAuth';
import RegisterForm from './RegisterForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { LOGIN } from 'routes';

const key = 'register';

function RegisterPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const isRegisterPending = useSelector(makeSelectIsRegisterPending());
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());
  const submitRegisterForm = useCallback(
    (...args) => dispatch(register(...args)),
    [dispatch]
  );

  const { formatMessage } = useIntl();

  const renderPendingIndicator = <div>Please wait...</div>;

  return (
    <main>
      <Helmet>
        <title>Register - React Boilerplate</title>
      </Helmet>
      <h1>{formatMessage(messages.registerTitle)}</h1>
      {!isSocialAuthPending ? (
        <>
          <SocialAuth
            facebookButtonText={formatMessage(messages.facebookButton)}
            googleButtonText={formatMessage(messages.googleButton)}
          />

          <RegisterForm
            onSubmit={submitRegisterForm}
            isPending={isRegisterPending}
          />
          <Link to={LOGIN}>{formatMessage(messages.loginLink)}</Link>
        </>
      ) : (
        renderPendingIndicator
      )}
    </main>
  );
}

export default RegisterPage;
