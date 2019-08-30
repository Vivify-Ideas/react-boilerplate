import {
  SOCIAL_AUTH_REQUEST,
  SOCIAL_AUTH_SUCCESS,
  SOCIAL_AUTH_ERROR
} from './constants';

export function socialAuthentication(accessToken, provider) {
  return {
    type: SOCIAL_AUTH_REQUEST,
    accessToken,
    provider
  };
}

export function socialAuthSuccess() {
  return {
    type: SOCIAL_AUTH_SUCCESS
  };
}

export function socialAuthError(error) {
  return {
    type: SOCIAL_AUTH_ERROR,
    error
  };
}
