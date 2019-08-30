import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';
import { setItem } from 'utils/localStorage';
import { DASHBOARD } from 'routes';
import { setToken, fetchAuthenticatedUser } from 'containers/App/actions';
import { registerSuccess, registerError } from './actions';
import { REGISTER_REQUEST } from './constants';

export function* register({
  firstName: first_name,
  lastName: last_name,
  email,
  password,
  meta: { setErrors }
}) {
  try {
    const { accessToken: token } = yield call(request, {
      url: '/auth/register',
      method: 'post',
      data: {
        first_name,
        last_name,
        email,
        password
      }
    });
    yield put(registerSuccess());
    yield call(setItem, 'token', token);
    yield put(setToken(token));
    yield put(fetchAuthenticatedUser());
    yield put(push(DASHBOARD));
  } catch (error) {
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.erorrs));
    }
    yield put(registerError());
  }
}

export default function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
}
