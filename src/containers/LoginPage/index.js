import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  makeSelectIsLoginPending,
  makeSelectIsSocialAuthPending,
} from 'store/auth/selectors';
import { login } from 'store/auth/actions';
import SocialAuth from 'containers/SocialAuth';
import LoginForm from './LoginForm';
import { REGISTER, FORGOT_PASSWORD } from 'routes';

function LoginPage() {
  const dispatch = useDispatch();
  const isLoginPending = useSelector(makeSelectIsLoginPending());
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());
  const submitLoginForm = useCallback((...args) => dispatch(login(...args)), [
    dispatch,
  ]);

  const { t } = useTranslation();

  const renderPendingIndicator = <div>Please wait...</div>;

  return (
    <main>
      <Helmet>
        <title>Login - React Boilerplate</title>
      </Helmet>
      <h1>{t('login_page.text.login_title')}</h1>
      {!isSocialAuthPending ? (
        <>
          <SocialAuth
            facebookButtonText={t('login_page.button.facebook')}
            googleButtonText={t('login_page.button.google')}
          />
          <LoginForm onSubmit={submitLoginForm} isPending={isLoginPending} />
          <Link to={FORGOT_PASSWORD}>
            {t('login_page.link.forgot_password')}
          </Link>
          <br />
          <Link to={REGISTER}>{t('login_page.link.register')}</Link>
        </>
      ) : (
        renderPendingIndicator
      )}
    </main>
  );
}

export default LoginPage;
