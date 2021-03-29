import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DASHBOARD, USER_PROFILE } from 'routes';

function AppBar({ onLogout }) {
  const { t } = useTranslation();

  return (
    <div>
      <Link to={DASHBOARD}>Vivify Ideas</Link>
      <Link to={USER_PROFILE}>{t('app_bar.link.profile')}</Link>
      <span onClick={onLogout}>{t('app_bar.link.logout')}</span>
    </div>
  );
}

AppBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AppBar;
