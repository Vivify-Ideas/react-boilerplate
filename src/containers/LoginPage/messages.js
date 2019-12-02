import { defineMessages } from 'react-intl';

export const scope = 'login_page';

export default defineMessages({
  loginTitle: {
    id: `${scope}.text.login_title`,
    defaultMessage: 'Login'
  },
  loginButton: {
    id: `${scope}.button.login`,
    defaultMessage: 'Login'
  },
  registerLink: {
    id: `${scope}.link.register`,
    defaultMessage: `Don't have an account? Register`
  },
  forgotPasswordLink: {
    id: `${scope}.text.forgot_password`,
    defaultMessage: 'Forgot password?'
  },
  facebookButton: {
    id: `${scope}.button.facebook`,
    defaultMessage: 'Login with Facebook'
  },
  googleButton: {
    id: `${scope}.button.google`,
    defaultMessage: 'Login with Google'
  },
  emailInputLabel: {
    id: `${scope}.input_label.email`,
    defaultMessage: 'Email Address'
  },
  passwordInputLabel: {
    id: `${scope}.input_label.password`,
    defaultMessage: 'Password'
  },
  unauthorized: {
    id: `${scope}.unauthorized`,
    defaultMessage: 'Unauthorized'
  }
});
