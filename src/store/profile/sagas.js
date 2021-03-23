import { takeLatest, call, put } from 'redux-saga/effects';
import isNull from 'lodash/isNull';
import isObject from 'lodash/isObject';
import request from 'utils/request';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';
import { enqueueSnackbar } from '../notifier/actions';
import {
  updateUserSuccess,
  updateUserError,
  changePasswordSuccess,
  changePasswordError,
} from './actions';
import { startAction, stopAction } from '../loading/actions';
import { UPDATE_USER_REQUEST, CHANGE_PASSWORD_REQUEST } from './actionTypes';
import messages from 'containers/UserProfilePage/messages';

export function* updateUser({
  type,
  firstName,
  lastName,
  avatar,
  meta: { setErrors },
}) {
  try {
    yield put(startAction(type));

    const form = new FormData();
    form.append('first_name', firstName);
    form.append('last_name', lastName);

    if (!isNull(avatar) && isObject(avatar)) {
      form.append('avatar', avatar);
    }

    yield call(request, {
      url: '/user',
      method: 'post',
      data: form,
    });
    yield put(updateUserSuccess());
    yield put(
      enqueueSnackbar({
        message: messages.profileUpdated,
      })
    );
  } catch (error) {
    yield put(stopAction(type));
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
    }
    yield put(updateUserError());
  } finally {
    yield put(stopAction(type));
  }
}

export function* changePassword({
  type,
  currentPassword: current_password,
  newPassword: new_password,
  newPasswordConfirmation: new_password_confirmation,
  meta: { setErrors, resetForm },
}) {
  try {
    yield put(startAction(type));
    yield call(request, {
      url: '/user/change-password',
      method: 'post',
      data: {
        current_password,
        new_password,
        new_password_confirmation,
      },
    });
    yield put(changePasswordSuccess());
    yield call(resetForm);
    yield put(
      enqueueSnackbar({
        message: messages.passwordChanged,
      })
    );
  } catch (error) {
    yield put(stopAction(type));
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
    }
    yield put(changePasswordError());
  } finally {
    yield put(stopAction(type));
  }
}

export default function* userProfileSaga() {
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword);
}
