import { defineMessages } from 'react-intl';

export const scope = 'reset_password_page';

export default defineMessages({
  resetPasswordTitle: {
    id: `${scope}.text.reset_password_title`,
    defaultMessage: 'Reset Password'
  },
  resetPasswordButton: {
    id: `${scope}.button.reset_password`,
    defaultMessage: 'Reset password'
  },
  passwordInputLabel: {
    id: `${scope}.input_label.password`,
    defaultMessage: 'Password'
  },
  passwordConfirmationInputLabel: {
    id: `${scope}.input_label.password_confirmation`,
    defaultMessage: 'Password Confirmation'
  },
  passwordReseted: {
    id: `${scope}.notifications.password_reseted`,
    defaultMessage: 'You can now login with new password'
  }
});
