import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCH_AUTHENTICATED_USER_REQUEST,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SET_TOKEN,
  SESSION_EXPIRED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  SOCIAL_AUTH_REQUEST,
  SOCIAL_AUTH_SUCCESS,
  SOCIAL_AUTH_ERROR,
} from './actionTypes';

export function login(email, password, setErrors) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
    meta: {
      setErrors,
    },
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function fetchAuthenticatedUser() {
  return {
    type: FETCH_AUTHENTICATED_USER_REQUEST,
  };
}

export function fetchAuthenticatedUserSuccess(user) {
  return {
    type: FETCH_AUTHENTICATED_USER_SUCCESS,
    user,
  };
}

export function logout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function sessionExpired() {
  return {
    type: SESSION_EXPIRED,
  };
}

export function forgotPassword(email, setErrors) {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    email,
    meta: {
      setErrors,
    },
  };
}

export function forgotPasswordSuccess() {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
}

export function forgotPasswordError() {
  return {
    type: FORGOT_PASSWORD_ERROR,
  };
}

export function register(firstName, lastName, email, password, setErrors) {
  return {
    type: REGISTER_REQUEST,
    firstName,
    lastName,
    email,
    password,
    meta: {
      setErrors,
    },
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR,
  };
}

export function resetPassword(password, passwordConfirmation, setErrors) {
  return {
    type: RESET_PASSWORD_REQUEST,
    password,
    passwordConfirmation,
    meta: {
      setErrors,
    },
  };
}

export function resetPasswordSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
}

export function resetPasswordError() {
  return {
    type: RESET_PASSWORD_ERROR,
  };
}

export function socialAuthentication(accessToken, provider) {
  return {
    type: SOCIAL_AUTH_REQUEST,
    accessToken,
    provider,
  };
}

export function socialAuthSuccess() {
  return {
    type: SOCIAL_AUTH_SUCCESS,
  };
}

export function socialAuthError(error) {
  return {
    type: SOCIAL_AUTH_ERROR,
    error,
  };
}
