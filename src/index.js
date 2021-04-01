import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as Sentry from '@sentry/browser';
import config from 'config';
import history from 'utils/history';
import App from 'containers/App';
import ErrorBoundry from 'containers/ErrorBoundary';
import configureStore from 'store';
import * as serviceWorker from 'serviceWorker';
import './translations';

const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

if (config.sentry.key && config.sentry.project) {
  Sentry.init({
    dsn: `https://${config.sentry.key}@sentry.io/${config.sentry.project}`,
  });
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundry>
          <App />
        </ErrorBoundry>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['translations', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
