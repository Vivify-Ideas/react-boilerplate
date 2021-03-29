import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { LOGIN, REGISTER } from 'routes';

function WelcomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Welcome - React Boilerplate</title>
      </Helmet>
      <div>
        <Link to={LOGIN}>{t('welcome_page.link.login')}</Link>
        <Link to={REGISTER}>{t('welcome_page.link.register')}</Link>
      </div>
      <main>
        <h1>{t('welcome_page.heading')}</h1>
        <h2>{t('welcome_page.subheading')}</h2>
        <p>
          {t('welcome_page.built_with_love', {
            team: 'Vivify Ideas',
          })}
        </p>
      </main>
    </div>
  );
}

export default WelcomePage;
