import jwtDecode from 'jwt-decode';

import httpService from './HttpService';
import { HTTP_METHODS, HTTP_STATUS_CODES } from 'consts';
import { getItem, setItem, removeItem } from 'utils/localStorage';

const ROUTES = {
  LOGIN: '/auth/login',
  ME: '/auth/me',
  LOGOUT: '/auth/logout',
  FORGOT_PASSWORD: '/user/forgot-password',
  REGISTER: '/auth/register',
  RESET_PASSWORD: '/user/reset-password',
  SOCIAL: (provider) => `/auth/social/${provider}`,
  TOKEN_REFRESH: '/auth/refresh',
};

class AuthService {
  constructor(httpService) {
    this.httpService = httpService;
    this.init();
  }

  init = () => {
    this.setAuthToken(this.getAccessToken());
    this.httpService.setRequestInterceptor(this.refreshToken);
    this.httpService.setResponseInterceptors(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
  };

  getAccessToken = () => {
    return getItem('token');
  };

  setAuthToken = (token) => {
    if (token) {
      setItem('token', token);

      this.httpService.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

  refreshToken = async (prevToken) => {
    const { accessToken: newToken } = await this.httpService.request({
      url: ROUTES.TOKEN_REFRESH,
      method: HTTP_METHODS.POST,
      headers: {
        Authorization: `Bearer ${prevToken}`,
      },
    });

    this.setAuthToken(newToken);

    return newToken;
  };

  login = async (data) => {
    const { accessToken: token } = await this.httpService.request({
      url: ROUTES.LOGIN,
      method: HTTP_METHODS.POST,
      data,
    });

    this.setAuthToken(token);

    return token;
  };

  fetchAuthenticatedUser = () => {
    return this.httpService.request({
      url: ROUTES.ME,
      method: HTTP_METHODS.GET,
    });
  };

  destroySession = () => {
    removeItem('token');
    this.httpService.removeHeaders(['Authorization']);
  };

  handleInterceptRequest = async (request) => {
    const token = this.getAccessToken();

    if (token && Date.now() / 1000 >= jwtDecode(token).exp) {
      const newToken = await this.refreshToken(token);
      request.headers.authorization = newToken;

      return request;
    }

    return request;
  };

  handleSuccessResponse = (response) => {
    return response;
  };

  handleErrorResponse = (error) => {
    try {
      const { status } = error.response;

      switch (status) {
        case HTTP_STATUS_CODES.UNAUTHORIZED:
          this.destroySession();
          break;
      }

      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(error);
    }
  };
}

const authService = new AuthService(httpService);

export default authService;
