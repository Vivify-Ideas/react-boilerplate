import camelCase from 'lodash/camelCase';

export default function parseApiErrorsToFormik(errors) {
  let result = {};

  for (let key in errors) {
    result[camelCase(key)] = errors[key][0];
  }

  return result;
}
