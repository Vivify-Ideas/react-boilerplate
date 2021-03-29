import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>Dashboard - React Boilerplate</title>
      </Helmet>
      <h1>{t('dashboard.start_project.header')}</h1>
    </main>
  );
}

export default Dashboard;
