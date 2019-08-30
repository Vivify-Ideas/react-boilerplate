import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

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
