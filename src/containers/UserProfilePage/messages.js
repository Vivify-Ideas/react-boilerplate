import { defineMessages } from 'react-intl';

export const scope = 'user_profile';

export default defineMessages({
  updateUserHeader: {
    id: `${scope}.text.update_user_header`,
    defaultMessage: 'Update Profile'
  },
  updateButton: {
    id: `${scope}.button.update`,
    defaultMessage: 'Update'
  },
  changePasswordButton: {
    id: `${scope}.button.change_password`,
    defaultMessage: 'Change Password'
  },
  firstNameInputLabel: {
    id: `${scope}.input_label.first_name`,
    defaultMessage: 'First Name'
  },
  lastNameInputLabel: {
    id: `${scope}.input_label.last_name`,
    defaultMessage: 'Last Name'
  },
  currentPasswordInputLabel: {
    id: `${scope}.input_label.current_password`,
    defaultMessage: 'Current Password'
  },
  newPasswordInputLabel: {
    id: `${scope}.input_label.new_password`,
    defaultMessage: 'New Password'
  },
  newPasswordConfirmationInputLabel: {
    id: `${scope}.input_label.new_password_confirmation`,
    defaultMessage: 'New Password Confirmation'
  },
  profileUpdated: {
    id: `${scope}.notification.profile_update`,
    defaultMessage: 'Profile informations succefully updated'
  },
  passwordChanged: {
    id: `${scope}.notifications.password_changed`,
    defaultMessage: 'Password succefully changed'
  }
});
