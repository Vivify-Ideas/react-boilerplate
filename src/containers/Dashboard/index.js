import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'dashbaord';

function Dashboard() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { formatMessage } = useIntl();

  return (
    <main>
      <Helmet>
        <title>Dashboard - React Boilerplate</title>
      </Helmet>
      <h1>{formatMessage(messages.startProjectHeader)}</h1>
    </main>
  );
}

export default Dashboard;
