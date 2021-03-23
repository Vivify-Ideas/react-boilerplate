import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import loadingReducer from './loading/reducer';
import authReducer from './auth/reducer';
import languageReducer from './language/reducer';
import notifierReducer from './notifier/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageReducer,
    router: connectRouter(history),
    loading: loadingReducer,
    notifier: notifierReducer,
    auth: authReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
