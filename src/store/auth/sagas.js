import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setItem, removeItem } from 'utils/localStorage';
import request from 'utils/request';
import {
  fetchAuthenticatedUser,
  fetchAuthenticatedUserSuccess,
  logoutSuccess,
  loginSuccess,
  loginError,
  setToken,
  forgotPasswordSuccess,
  forgotPasswordError,
  registerSuccess,
  registerError,
} from './actions';
import { startAction, stopAction } from '../loading/actions';
import { enqueueSnackbar } from '../notifier/actions';
import {
  LOGIN_REQUEST,
  FETCH_AUTHENTICATED_USER_REQUEST,
  LOGOUT_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  REGISTER_REQUEST,
} from './actionTypes';
import { DASHBOARD } from 'routes';
import messages from 'containers/LoginPage/messages';
import forgotPasswordMessages from 'containers/ForgotPasswordPage/messages';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';

export function* authorize({ type, email, password }) {
  try {
    yield put(startAction(type));
    const { accessToken: token } = yield call(request, {
      url: '/auth/login',
      method: 'post',
      data: { email, password },
    });
    yield put(loginSuccess());
    yield call(setItem, 'token', token);
    yield put(setToken(token));
    yield put(fetchAuthenticatedUser());
    yield put(push(DASHBOARD));
  } catch (error) {
    yield put(stopAction(type));
    if (error.status === 401) {
      yield put(
        enqueueSnackbar({
          message: messages.unauthorized,
        })
      );
    }
    yield put(loginError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* fetchUser({ type }) {
  yield put(startAction(type));
  try {
    const user = yield call(request, {
      url: '/auth/me',
      method: 'get',
    });
    yield put(fetchAuthenticatedUserSuccess(user));
  } catch (error) {
    yield put(stopAction(type));
  } finally {
    yield put(stopAction(type));
  }
}

export function* logout() {
  try {
    yield call(request, {
      url: '/auth/logout',
      method: 'post',
    });
    yield put(logoutSuccess());
    yield call(removeItem, 'token');
  } catch (error) {
    //
  }
}

export function* forgotPassword({ type, email, meta: { setErrors } }) {
  yield put(startAction(type));
  try {
    yield call(request, {
      url: '/user/forgot-password',
      method: 'post',
      data: { email },
    });
    yield put(forgotPasswordSuccess());
    yield put(
      enqueueSnackbar({
        message: forgotPasswordMessages.resetLinkSent,
      })
    );
  } catch (error) {
    yield put(stopAction(type));
    if (error.status === 422) {
      yield call(setErrors, error.data.errors);
    }
    yield put(forgotPasswordError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* register({
  type,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
  meta: { setErrors },
}) {
  try {
    yield put(startAction(type));
    const { accessToken: token } = yield call(request, {
      url: '/auth/register',
      method: 'post',
      data: {
        first_name,
        last_name,
        email,
        password,
      },
    });
    yield put(registerSuccess());
    yield call(setItem, 'token', token);
    yield put(setToken(token));
    yield put(fetchAuthenticatedUser());
    yield put(push(DASHBOARD));
  } catch (error) {
    yield put(stopAction(type));
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.erorrs));
    }
    yield put(registerError());
  } finally {
    yield put(stopAction(type));
  }
}

export default function* appSaga() {
  yield takeLatest(LOGIN_REQUEST, authorize);
  yield takeLatest(FETCH_AUTHENTICATED_USER_REQUEST, fetchUser);
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword);
  yield takeLatest(REGISTER_REQUEST, register);
}
