import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './constants';

export function register(firstName, lastName, email, password, setErrors) {
  return {
    type: REGISTER_REQUEST,
    firstName,
    lastName,
    email,
    password,
    meta: {
      setErrors
    }
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR
  };
}
