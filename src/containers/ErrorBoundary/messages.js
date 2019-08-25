import { defineMessages } from 'react-intl';

export const scope = 'error_page';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is embarrassing 🤦‍'
  },
  reportFeedbackButton: {
    id: `${scope}.button.report_feedback`,
    defaultMessage: 'Report feedback'
  },
  backLink: {
    id: `${scope}.link.back`,
    defaultMessage: 'Go back'
  }
});
