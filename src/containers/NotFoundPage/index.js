import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import messages from './messages';

export function NotFound() {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Helmet>
        <title>404 - React Boilerplate</title>
      </Helmet>
      <main>
        <h1>404 | {formatMessage(messages.header)}</h1>
        <Link to="/">{formatMessage(messages.backLink)}</Link>
      </main>
    </div>
  );
}

export default NotFound;
