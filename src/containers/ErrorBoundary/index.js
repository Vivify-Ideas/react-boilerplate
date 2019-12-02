import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as Sentry from '@sentry/browser';
import messages from './messages';

export class ErrorBoundry extends Component {
  state = {
    eventId: null
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  showReportDialog = () => {
    Sentry.showReportDialog({ eventId: this.state.eventId });
  };

  render() {
    if (this.state.hasError) {
      // render fallback UI

      if (this.props.fallbackUI) {
        return this.props.fallbackUI(this.showReportDialog);
      }

      const { formatMessage } = this.props.intl;

      return (
        <div>
          <h1>{formatMessage(messages.header)}</h1>
          <button onClick={this.showReportDialog}>
            {formatMessage(messages.reportFeedbackButton)}
          </button>
          <a href="/">{formatMessage(messages.backLink)}</a>
        </div>
      );
    }

    // when there's not an error, render children untouched
    return this.props.children;
  }
}

ErrorBoundry.propTypes = {
  fallbackUI: PropTypes.func
};

export default injectIntl(ErrorBoundry);
