import { defineMessages } from 'react-intl';

export const scope = 'app_bar';

export default defineMessages({
  profileLink: {
    id: `${scope}.link.profile`,
    defaultMessage: 'Profile'
  },
  logoutLink: {
    id: `${scope}.link.logout`,
    defaultMessage: 'Logout'
  },
  notificationsLink: {
    id: `${scope}.link.notifications`,
    defaultMessage: 'Notifications'
  }
});
