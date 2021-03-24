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
    return this.client(requestConfig);
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
