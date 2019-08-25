import React, { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withSnackbar } from 'notistack';
import { FormattedMessage } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectNotifications } from './selectors';
import { removeSnackbar } from './actions';
import reducer from './reducer';

const key = 'notifier';

export function Notifier({
  notifications,
  enqueueSnackbar,
  removeSnackbar,
  closeSnackbar
}) {
  useInjectReducer({ key, reducer });
  const displayed = useRef([]);

  useEffect(() => {
    if (!notifications.length) {
      displayed.current = [];
      return;
    }

    notifications.forEach(({ key, message, dismissed, options = {} }) => {
      if (displayed.current.includes(key)) return;

      if (dismissed) {
        closeSnackbar(key);
        removeSnackbar(key);
      } else {
        enqueueSnackbar(<FormattedMessage {...message} />, {
          key,
          ...options,
          onClose: (event, reason, key) => {
            if (options.onClose) {
              options.onClose(event, reason, key);
            }
            removeSnackbar(key);
          }
        });

        storeDisplayed(key);
      }
    });
  });

  const storeDisplayed = id => {
    displayed.current = [...displayed.current, id];
  };

  return null;
}

Notifier.propTypes = {
  notifications: PropTypes.array,
  removeSnackbar: PropTypes.func,
  enqueueSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  notifications: makeSelectNotifications()
});

const mapDispatchToProps = {
  removeSnackbar
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withSnackbar(
  compose(
    withConnect,
    memo
  )(Notifier)
);
