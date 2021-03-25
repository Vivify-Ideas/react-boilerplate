import { fork } from 'redux-saga/effects';

import AuthSagas from './auth/sagas';
import ProfileSagas from './profile/sagas';

export default function* rootSaga() {
  yield fork(AuthSagas);
  yield fork(ProfileSagas);
}
