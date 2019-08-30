import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './constants';

export function resetPassword(password, passwordConfirmation, setErrors) {
  return {
    type: RESET_PASSWORD_REQUEST,
    password,
    passwordConfirmation,
    meta: {
      setErrors
    }
  };
}

export function resetPasswordSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS
  };
}

export function resetPasswordError() {
  return {
    type: RESET_PASSWORD_ERROR
  };
}
