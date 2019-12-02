import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { DASHBOARD, USER_PROFILE } from 'routes';
import messages from './messages';

function AppBar({ onLogout }) {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Link to={DASHBOARD}>Vivify Ideas</Link>
      <Link to={USER_PROFILE}>{formatMessage(messages.profileLink)}</Link>
      <span onClick={onLogout}>{formatMessage(messages.logoutLink)}</span>
    </div>
  );
}

AppBar.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default AppBar;
