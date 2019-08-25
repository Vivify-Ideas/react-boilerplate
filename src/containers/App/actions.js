export const APP = '[App]';

export const FETCH_AUTHENTICATED_USER_REQUEST = `${APP} FETCH_AUTHENTICATED_USER_REQUEST`;
export const FETCH_AUTHENTICATED_USER_SUCCESS = `${APP} FETCH_AUTHENTICATED_USER_SUCCESS`;
export const LOGOUT_REQUEST = `${APP} LOGOUT_REQUEST`;
export const LOGOUT_SUCCESS = `${APP} LOGOUT_SUCCESS`;
export const SET_TOKEN = `${APP} SET_TOKEN`;

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
