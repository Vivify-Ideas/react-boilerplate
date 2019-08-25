import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import * as Sentry from '@sentry/browser';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import messages from './messages';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
});

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

      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Container component="main" className={classes.main} maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
              <FormattedMessage {...messages.header} />
            </Typography>
            <Button
              onClick={this.showReportDialog}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <FormattedMessage {...messages.reportFeedbackButton} />
            </Button>
            <Button href="/" className={classes.button}>
              <FormattedMessage {...messages.backLink} />
            </Button>
          </Container>
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

export default withStyles(styles)(ErrorBoundry);
