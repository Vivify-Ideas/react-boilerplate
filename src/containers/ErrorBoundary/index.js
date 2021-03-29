import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

export class ErrorBoundry extends Component {
  state = {
    eventId: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  showReportDialog = () => {
    Sentry.showReportDialog({ eventId: this.state.eventId });
  };

  render() {
    const { t, fallbackUI, children } = this.props;

    if (this.state.hasError) {
      // render fallback UI

      if (fallbackUI) {
        return fallbackUI(this.showReportDialog);
      }

      return (
        <div>
          <h1>{t('error_page.header')}</h1>
          <button onClick={this.showReportDialog}>
            {t('error_page.button.report_feedback')}
          </button>
          <a href="/">{t('error_page.link.back')}</a>
        </div>
      );
    }

    // when there's not an error, render children untouched
    return children;
  }
}

ErrorBoundry.propTypes = {
  fallbackUI: PropTypes.func,
};

export default withTranslation()(ErrorBoundry);
