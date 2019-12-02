import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import messages from './messages';
import { LOGIN, REGISTER } from 'routes';

function WelcomePage() {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Helmet>
        <title>Welcome - React Boilerplate</title>
      </Helmet>
      <div>
        <Link to={LOGIN}>{formatMessage(messages.loginLink)}</Link>
        <Link to={REGISTER}>{formatMessage(messages.registerLink)}</Link>
      </div>
      <main>
        <h1>{formatMessage(messages.heading)}</h1>
        <h2>{formatMessage(messages.subheading)}</h2>
        <p>
          {formatMessage(messages.builtWithLove, {
            team: (
              <a key="team" href="https://www.vivifyideas.com/">
                Vivify Ideas
              </a>
            )
          })}
        </p>
      </main>
    </div>
  );
}

export default WelcomePage;
