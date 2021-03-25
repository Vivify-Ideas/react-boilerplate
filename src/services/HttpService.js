import axios from 'axios';
import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

import config from '../config';

class HttpClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.api.baseUrl,
    });
  }

  request = (requestConfig) => {
    return this.client(requestConfig);
  };

  addRequestInterceptor = (callback) => {
    return this.client.interceptors.request.use(callback);
  };

  removeRequestInterceptor = (interceptorId) => {
    this.client.interceptors.request.eject(interceptorId);
  };

  addResponseInterceptors = (successCallback, errorCallback) => {
    return this.client.interceptors.response.use(
      successCallback,
      errorCallback
    );
  };

  removeResponseInterceptors = (interceptorId) => {
    this.client.interceptors.response.eject(interceptorId);
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
    this.init();
  }

  init = () => {
    this.addResponseInterceptors(
      (response) => mapKeys(response.data, (_, key) => camelCase(key)),
      (error) => Promise.reject(error.response)
    );
  };

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

  addRequestInterceptor = (callback) => {
    return this.httpClient.addRequestInterceptor(callback);
  };

  removeRequestInterceptor = (interceptorId) => {
    this.httpClient.removeRequestInterceptor(interceptorId);
  };

  addResponseInterceptors = (successCallback, errorCallback) => {
    return this.httpClient.addResponseInterceptors(
      successCallback,
      errorCallback
    );
  };

  removeResponseInterceptors = (interceptorId) => {
    this.httpClient.removeResponseInterceptors(interceptorId);
  };
}

const httpService = new HttpService(new HttpClient());

export default httpService;
