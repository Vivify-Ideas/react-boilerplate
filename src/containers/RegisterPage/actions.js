export const REGISTER = '[Register]';

export const REGISTER_REQUEST = `${REGISTER} REGISTER_REQUEST`;
export const REGISTER_SUCCESS = `${REGISTER} REGISTER_SUCCESS`;
export const REGISTER_ERROR = `${REGISTER} REGISTER_ERROR`;

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
