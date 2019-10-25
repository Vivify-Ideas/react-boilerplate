import {
  FETCH_AUTHENTICATED_USER_REQUEST,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SET_TOKEN,
  SESSION_EXPIRED
} from './constants';

export function fetchAuthenticatedUser() {
  return {
    type: FETCH_AUTHENTICATED_USER_REQUEST
  };
}

export function fetchAuthenticatedUserSuccess(user) {
  return {
    type: FETCH_AUTHENTICATED_USER_SUCCESS,
    user
  };
}

export function logout() {
  return {
    type: LOGOUT_REQUEST
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  };
}

export function sessionExpired() {
  return {
    type: SESSION_EXPIRED
  };
}
