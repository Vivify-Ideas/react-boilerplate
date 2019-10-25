import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsSocialAuthPending } from 'containers/SocialAuth/selectors';
import { makeSelectIsLoginPending } from './selectors';
import { login } from './actions';
import SocialAuth from 'containers/SocialAuth';
import LoginForm from './LoginForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { REGISTER, FORGOT_PASSWORD } from 'routes';

const key = 'login';

function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const isLoginPending = useSelector(makeSelectIsLoginPending());
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());
  const submitLoginForm = useCallback((...args) => dispatch(login(...args)), [
    dispatch
  ]);

  const { formatMessage } = useIntl();

  const renderPendingIndicator = <div>Please wait...</div>;

  return (
    <main>
      <Helmet>
        <title>Login - React Boilerplate</title>
      </Helmet>
      <h1>{formatMessage(messages.loginTitle)}</h1>
      {!isSocialAuthPending ? (
        <>
          <SocialAuth
            facebookButtonText={formatMessage(messages.facebookButton)}
            googleButtonText={formatMessage(messages.googleButton)}
          />
          <LoginForm onSubmit={submitLoginForm} isPending={isLoginPending} />
          <Link to={FORGOT_PASSWORD}>
            {formatMessage(messages.forgotPasswordLink)}
          </Link>
          <br />
          <Link to={REGISTER}>{formatMessage(messages.registerLink)}</Link>
        </>
      ) : (
        renderPendingIndicator
      )}
    </main>
  );
}

export default LoginPage;
