import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { enqueueSnackbar } from 'containers/Notifier/actions';
import { forgotPasswordSuccess, forgotPasswordError } from './actions';
import { FORGOT_PASSWORD_REQUEST } from './constants';
import messages from './messages';

export function* forgotPassword({ email, meta: { setErrors } }) {
  try {
    yield call(request, {
      url: '/user/forgot-password',
      method: 'post',
      data: { email }
    });
    yield put(forgotPasswordSuccess());
    yield put(
      enqueueSnackbar({
        message: messages.resetLinkSent
      })
    );
  } catch (error) {
    if (error.status === 422) {
      yield call(setErrors, error.data.errors);
    }
    yield put(forgotPasswordError());
  }
}

export default function* forgotPasswordSaga() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword);
}
