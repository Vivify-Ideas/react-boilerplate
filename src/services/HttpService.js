import axios from 'axios';
import config from '../config';

class Axios {
  constructor() {
    this.client = axios.create({
      baseURL: config.API_BASE_URL,
    });

    this.client.interceptors.request.use(this.handleInterceptRequest);
    this.client.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
  }

  setRequestInterceptor = (callback) => {
    this.handleInterceptRequest = callback;
  };

  setResponseInterceptors = (successCallback, errorCallback) => {
    this.handleSuccessResponse = successCallback;
    this.handleErrorResponse = errorCallback;
  };

  request = (requestConfig) => {
    //TODO: Remove when done testing:
    const { url } = requestConfig;

    if (
      url === '/auth/login' ||
      url === '/auth/register' ||
      url === '/auth/social/facebook' ||
      url === '/auth/social/google'
    ) {
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              accessToken: '123abc',
            }),
          1000
        )
      );
    }

    if (url === '/auth/me') {
      return new Promise((resolve, reject) =>
        setTimeout(
          () =>
            resolve({
              firstName: 'John',
              lastName: 'Doe',
              avatar: null,
            }),
          // reject({
          //   status: 401,
          // }),
          1000
        )
      );
    }

    if (
      url === '/user/forgot-password' ||
      url === '/user/reset-password' ||
      url === '/user/change-password' ||
      url === '/user'
    ) {
      return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
    }
    // ---------------------------------

    //TODO: Uncomment when done testing:
    // return this.client(requestConfig);
  };

  attachHeaders = (headers) => {
    Object.assign(this.client.defaults.headers, headers);
  };

  removeHeaders = (headerKeys) => {
    headerKeys.forEach((key) => delete this.client.defaults.headers[key]);
  };
}

class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  request = (requestConfig) => {
    return this.httpClient.request(requestConfig);
  };

  attachHeaders = (headers) => {
    this.httpClient.attachHeaders(headers);
  };

  removeHeaders = (headerKeys) => {
    this.httpClient.removeHeaders(headerKeys);
  };

  setUnauthorizedCallback = (callback) => {
    this.unauthorizedCallback = callback;
  };

  setRequestInterceptor = (callback) => {
    this.httpClient.setRequestInterceptor(callback);
  };

  setResponseInterceptors = (successCallback, errorCallback) => {
    this.httpClient.setResponseInterceptors(successCallback, errorCallback);
  };
}

const httpService = new HttpService(new Axios());

export default httpService;
