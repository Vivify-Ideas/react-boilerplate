import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as Sentry from '@sentry/browser';
import config from 'config';
import history from 'utils/history';
import App from 'containers/App';
import LanguageProvider from 'containers/LanguageProvider';
import ErrorBoundry from 'containers/ErrorBoundary';
import configureStore from 'configureStore';
import * as serviceWorker from 'serviceWorker';
import { translationMessages } from './i18n';

const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

if (config.sentry.key && config.sentry.project) {
  Sentry.init({
    dsn: `https://${config.sentry.key}@sentry.io/${config.sentry.project}`,
  });
}

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <ErrorBoundry>
            <App />
          </ErrorBoundry>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
