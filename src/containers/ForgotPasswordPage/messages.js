import { defineMessages } from 'react-intl';

export const scope = 'forgot_password_page';

export default defineMessages({
  forgotPasswordTitle: {
    id: `${scope}.text.forgot_password_title`,
    defaultMessage: 'Forgot Password'
  },
  resetPasswordButton: {
    id: `${scope}.button.reset_password`,
    defaultMessage: 'Reset password'
  },
  emailInputLabel: {
    id: `${scope}.input_label.email`,
    defaultMessage: 'Email Address'
  },
  resetLinkSent: {
    id: `${scope}.notifications.reset_link_sent`,
    defaultMessage: 'Password reset link sent'
  }
});
