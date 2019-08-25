import { defineMessages } from 'react-intl';

export const scope = 'register_page';

export default defineMessages({
  registerTitle: {
    id: `${scope}.text.register_title`,
    defaultMessage: 'Register'
  },
  registerButton: {
    id: `${scope}.button.register`,
    defaultMessage: 'Register'
  },
  loginLink: {
    id: `${scope}.link.login`,
    defaultMessage: 'Already have an account? Login'
  },
  facebookButton: {
    id: `${scope}.button.facebook`,
    defaultMessage: 'Register with Facebook'
  },
  googleButton: {
    id: `${scope}.button.google`,
    defaultMessage: 'Register with Google'
  },
  firstNameInputLabel: {
    id: `${scope}.input_label.first_name`,
    defaultMessage: 'First Name'
  },
  lastNameInputField: {
    id: `${scope}.input_label.last_name`,
    defaultMessage: 'Last Name'
  },
  emailInputLabel: {
    id: `${scope}.input_label.email`,
    defaultMessage: 'Email Address'
  },
  passwordInputLabel: {
    id: `${scope}.input_label.password`,
    defaultMessage: 'Password'
  }
});
