import { call, select, put } from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

import config from 'config';
import { setItem } from 'utils/localStorage';

import { setToken, logout } from 'containers/App/actions';
import { makeSelectToken } from 'containers/App/selectors';

const api = axios.create({
  baseURL: config.api.baseUrl
});

api.interceptors.response.use(
  response => mapKeys(response.data, (_, key) => camelCase(key)),
  error => Promise.reject(error.response)
);

export default function* request({ url, method, data, headers = {} }) {
  try {
    let token = yield select(makeSelectToken());

    if (token) {
      if (Date.now() / 1000 >= jwtDecode(token).exp) {
        token = yield call(refreshToken, token);
      }

      headers.Authorization = `Bearer ${token}`;
    }

    return yield call(api, { method, url, headers, data });
  } catch (error) {
    if (error.status === 401) {
      yield put(logout());
    } else {
      throw error;
    }
  }
}

export function* refreshToken(prevToken) {
  const { accessToken: token } = yield call(api, {
    url: '/auth/refresh',
    method: 'post',
    headers: {
      Authorization: `Bearer ${prevToken}`
    }
  });

  yield call(setItem, 'token', token);

  yield put(setToken(token));

  return token;
}
