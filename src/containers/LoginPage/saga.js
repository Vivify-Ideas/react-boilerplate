import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import { setItem } from 'utils/localStorage';
import { enqueueSnackbar } from 'containers/Notifier/actions';
import { DASHBOARD } from 'routes';
import { setToken, fetchAuthenticatedUser } from 'containers/App/actions';
import { loginSuccess, loginError } from './actions';
import { LOGIN_REQUEST } from './constants';
import messages from './messages';

export function* authorize({ email, password }) {
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
    if (error.status === 401) {
      yield put(
        enqueueSnackbar({
          message: messages.unauthorized
        })
      );
    }
    yield put(loginError());
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, authorize);
}
