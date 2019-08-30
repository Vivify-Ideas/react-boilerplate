import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';
import { enqueueSnackbar } from 'containers/Notifier/actions';
import { resetPasswordSuccess, resetPasswordError } from './actions';
import { RESET_PASSWORD_REQUEST } from './constants';
import { LOGIN } from 'routes';
import messages from './messages';

const getRouterLocationSearch = state => state.router.location.search;

export function* resetPassword({
  password,
  passwordConfirmation,
  meta: { setErrors }
}) {
  try {
    const search = yield select(getRouterLocationSearch);
    const params = new URLSearchParams(search);
    const token = params.get('forgot_password_token');
    yield call(request, {
      url: '/user/reset-password',
      method: 'post',
      data: { token, password, password_confirmation: passwordConfirmation }
    });
    yield put(resetPasswordSuccess());
    yield put(
      enqueueSnackbar({
        message: messages.passwordReseted
      })
    );
    yield put(push(LOGIN));
  } catch (error) {
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
    }
    yield put(resetPasswordError());
  }
}

export default function* resetPasswordSage() {
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword);
}
