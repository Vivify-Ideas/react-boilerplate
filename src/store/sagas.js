import { fork } from 'redux-saga/effects';

import AuthSagas from './auth/sagas';

export default function* rootSaga() {
  yield fork(AuthSagas);
}
