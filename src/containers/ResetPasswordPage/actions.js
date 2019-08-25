export const RESET_PASSWORD = '[Reset Password]';

export const RESET_PASSWORD_REQUEST = `${RESET_PASSWORD} RESET_PASSWORD_REQUEST`;
export const RESET_PASSWORD_SUCCESS = `${RESET_PASSWORD} RESET_PASSWORD_SUCCESS`;
export const RESET_PASSWORD_ERROR = `${RESET_PASSWORD} RESET_PASSWORD_ERROR`;

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
