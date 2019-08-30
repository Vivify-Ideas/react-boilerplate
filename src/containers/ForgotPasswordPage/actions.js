import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR
} from './constants';

export function forgotPassword(email, setErrors) {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    email,
    meta: {
      setErrors
    }
  };
}

export function forgotPasswordSuccess() {
  return {
    type: FORGOT_PASSWORD_SUCCESS
  };
}

export function forgotPasswordError() {
  return {
    type: FORGOT_PASSWORD_ERROR
  };
}
