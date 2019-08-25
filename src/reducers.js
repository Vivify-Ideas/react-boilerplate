import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import appReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app: appReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers
  });

  return rootReducer;
}
