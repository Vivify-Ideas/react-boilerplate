import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { LOCALES } from 'translations';

function Dashboard() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <main>
      <Helmet>
        <title>Dashboard - React Boilerplate</title>
      </Helmet>
      <label>{t('dashboard.select_language')}</label>
      <select value={i18n.language} onChange={changeLanguage}>
        {LOCALES.map((locale) => (
          <option value={locale} key={locale}>
            {locale}
          </option>
        ))}
      </select>
      <h1>{t('dashboard.header')}</h1>
    </main>
  );
}

export default Dashboard;
