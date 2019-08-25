export const LOGIN = '[Login]';

export const LOGIN_REQUEST = `${LOGIN} LOGIN_REQUEST`;
export const LOGIN_SUCCESS = `${LOGIN} LOGIN_SUCCESS`;
export const LOGIN_ERROR = `${LOGIN} LOGIN_ERROR`;

export function login(email, password, setErrors) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
    meta: {
      setErrors
    }
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}
