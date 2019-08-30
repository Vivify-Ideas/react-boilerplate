import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import { setItem } from 'utils/localStorage';
import { DASHBOARD } from 'routes';
import { setToken, fetchAuthenticatedUser } from 'containers/App/actions';
import { socialAuthSuccess, socialAuthError } from './actions';
import { SOCIAL_AUTH_REQUEST } from './constants';

export function* socialAuthentication({ accessToken, provider }) {
  try {
    const { accessToken: token } = yield call(request, {
      url: `/auth/social/${provider}`,
      method: 'post',
      data: {
        accessToken
      }
    });
    yield put(socialAuthSuccess());
    yield call(setItem, 'token', token);
    yield put(setToken(token));
    yield put(fetchAuthenticatedUser());
    yield put(push(DASHBOARD));
  } catch (error) {
    yield put(socialAuthError(error.data));
  }
}

export default function* registerSaga() {
  yield takeLatest(SOCIAL_AUTH_REQUEST, socialAuthentication);
}
