export const USER_PROFILE = '[User Profile]';

export const UPDATE_USER_REQUEST = `${USER_PROFILE} UPDATE_USER_REQUEST`;
export const UPDATE_USER_SUCCESS = `${USER_PROFILE} UPDATE_USER_SUCCESS`;
export const UPDATE_USER_ERROR = `${USER_PROFILE} UPDATE_USER_ERROR`;
export const CHANGE_PASSWORD_REQUEST = `${USER_PROFILE} CHANGE_PASSWORD_REQUEST`;
export const CHANGE_PASSWORD_SUCCESS = `${USER_PROFILE} CHANGE_PASSWORD_SUCCESS`;
export const CHANGE_PASSWORD_ERROR = `${USER_PROFILE} CHANGE_PASSWORD_ERROR`;

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
