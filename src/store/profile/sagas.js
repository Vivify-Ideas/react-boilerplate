import { takeLatest, call, put } from 'redux-saga/effects';
import isNull from 'lodash/isNull';
import isObject from 'lodash/isObject';
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
import profileService from 'services/ProfileService';
import { HTTP_STATUS_CODES } from 'consts';

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

    yield call(profileService.updateProfile, form);
    yield put(updateUserSuccess());
    yield put(
      enqueueSnackbar({
        message: 'user_profile.notification.profile_update',
      })
    );
  } catch (error) {
    if (error.status === HTTP_STATUS_CODES.VALIDATION_FAILED) {
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
    yield call(profileService.changePassword, {
      current_password,
      new_password,
      new_password_confirmation,
    });
    yield put(changePasswordSuccess());
    yield call(resetForm);
    yield put(
      enqueueSnackbar({
        message: 'user_profile.notification.password_changed',
      })
    );
  } catch (error) {
    if (error.status === HTTP_STATUS_CODES.VALIDATION_FAILED) {
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
