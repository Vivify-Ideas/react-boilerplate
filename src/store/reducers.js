import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import loadingReducer from './loading/reducer';
import authReducer from './auth/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    loading: loadingReducer,
    auth: authReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
