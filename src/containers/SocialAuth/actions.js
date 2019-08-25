export const SOCIAL_AUTH = '[Social Authentication]';

export const SOCIAL_AUTH_REQUEST = `${SOCIAL_AUTH} SOCIAL_AUTH_REQUEST`;
export const SOCIAL_AUTH_SUCCESS = `${SOCIAL_AUTH} SOCIAL_AUTH_SUCCESS`;
export const SOCIAL_AUTH_ERROR = `${SOCIAL_AUTH} SOCIAL_AUTH_ERROR`;

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
