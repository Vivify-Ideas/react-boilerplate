import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR
} from './constants';

export function updateUser(firstName, lastName, avatar, setErrors) {
  return {
    type: UPDATE_USER_REQUEST,
    firstName,
    lastName,
    avatar,
    meta: {
      setErrors
    }
  };
}

export function updateUserSuccess() {
  return {
    type: UPDATE_USER_SUCCESS
  };
}

export function updateUserError(error) {
  return {
    type: UPDATE_USER_ERROR,
    error
  };
}

export function changePassword(
  currentPassword,
  newPassword,
  newPasswordConfirmation,
  setErrors,
  resetForm
) {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    currentPassword,
    newPassword,
    newPasswordConfirmation,
    meta: {
      setErrors,
      resetForm
    }
  };
}

export function changePasswordSuccess() {
  return {
    type: CHANGE_PASSWORD_SUCCESS
  };
}

export function changePasswordError() {
  return {
    type: CHANGE_PASSWORD_ERROR
  };
}
