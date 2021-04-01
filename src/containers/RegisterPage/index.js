import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  makeSelectIsRegisterPending,
  makeSelectIsSocialAuthPending,
} from 'store/auth/selectors';
import { register } from 'store/auth/actions';
import SocialAuth from 'containers/SocialAuth';
import RegisterForm from './RegisterForm';
import { LOGIN } from 'routes';

function RegisterPage() {
  const dispatch = useDispatch();
  const isRegisterPending = useSelector(makeSelectIsRegisterPending());
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());
  const submitRegisterForm = useCallback(
    (...args) => dispatch(register(...args)),
    [dispatch]
  );

  const { t } = useTranslation();

  const renderPendingIndicator = <div>Please wait...</div>;

  return (
    <main>
      <Helmet>
        <title>Register - React Boilerplate</title>
      </Helmet>
      <h1>{t('register_page.text.register_title')}</h1>
      {!isSocialAuthPending ? (
        <>
          <SocialAuth
            facebookButtonText={t('register_page.button.facebook')}
            googleButtonText={t('register_page.button.google')}
          />

          <RegisterForm
            onSubmit={submitRegisterForm}
            isPending={isRegisterPending}
          />
          <Link to={LOGIN}>{t('register_page.link.login')}</Link>
        </>
      ) : (
        renderPendingIndicator
      )}
    </main>
  );
}

export default RegisterPage;
