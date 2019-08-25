export const FORGOT_PASSWORD = '[Forgot Password]';

export const FORGOT_PASSWORD_REQUEST = `${FORGOT_PASSWORD} FORGOT_PASSWORD_REQUEST`;
export const FORGOT_PASSWORD_SUCCESS = `${FORGOT_PASSWORD} FORGOT_PASSWORD_SUCCESS`;
export const FORGOT_PASSWORD_ERROR = `${FORGOT_PASSWORD} FORGOT_PASSWORD_ERROR`;

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
