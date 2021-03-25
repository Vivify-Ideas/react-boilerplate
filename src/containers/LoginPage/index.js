import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  makeSelectIsLoginPending,
  makeSelectIsSocialAuthPending,
} from 'store/auth/selectors';
import { login } from 'store/auth/actions';
import SocialAuth from 'containers/SocialAuth';
import LoginForm from './LoginForm';
import messages from './messages';
import { REGISTER, FORGOT_PASSWORD } from 'routes';

function LoginPage() {
  const dispatch = useDispatch();
  const isLoginPending = useSelector(makeSelectIsLoginPending());
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());
  const submitLoginForm = useCallback((...args) => dispatch(login(...args)), [
    dispatch,
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
