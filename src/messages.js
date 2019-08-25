import { defineMessages } from 'react-intl';

export const scope = 'global';

export default defineMessages({
  email: {
    id: `${scope}.validations.email`,
    defaultMessage: '{label} must be a valid email'
  },
  required: {
    id: `${scope}.validations.required`,
    defaultMessage: '{label} is required'
  },
  oneOf: {
    id: `${scope}.validations.one_of`,
    defaultMessage: '{label} must match with {value}'
  }
});
