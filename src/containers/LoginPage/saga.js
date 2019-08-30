import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import { setItem } from 'utils/localStorage';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';
import { DASHBOARD } from 'routes';
import { setToken, fetchAuthenticatedUser } from 'containers/App/actions';
import { loginSuccess, loginError } from './actions';
import { LOGIN_REQUEST } from './constants';

export function* authorize({ email, password, meta: { setErrors } }) {
  try {
    const { accessToken: token } = yield call(request, {
      url: '/auth/login',
      method: 'post',
      data: { email, password }
    });
    yield put(loginSuccess());
    yield call(setItem, 'token', token);
    yield put(setToken(token));
    yield put(fetchAuthenticatedUser());
    yield put(push(DASHBOARD));
  } catch (error) {
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
    }
    yield put(loginError());
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, authorize);
}
