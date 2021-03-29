import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>404 - React Boilerplate</title>
      </Helmet>
      <main>
        <h1>404 | {t('not_found_page.header')}</h1>
        <Link to="/">{t('not_found_page.link.back')}</Link>
      </main>
    </div>
  );
}

export default NotFound;
