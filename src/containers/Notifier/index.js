import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withSnackbar } from 'notistack';
import { useIntl } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectNotifications } from './selectors';
import { removeSnackbar } from './actions';
import reducer from './reducer';

const key = 'notifier';

export function Notifier({ enqueueSnackbar, closeSnackbar }) {
  useInjectReducer({ key, reducer });
  const displayed = useRef([]);

  const dispatch = useDispatch();
  const notifications = useSelector(makeSelectNotifications());

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (!notifications.length) {
      displayed.current = [];
      return;
    }

    notifications.forEach(({ key, message, dismissed, options = {} }) => {
      if (displayed.current.includes(key)) return;

      if (dismissed) {
        closeSnackbar(key);
        dispatch(removeSnackbar(key));
      } else {
        enqueueSnackbar('', {
          key,
          ...options,
          onClose: (event, reason, key) => {
            if (options.onClose) {
              options.onClose(event, reason, key);
            }
            dispatch(removeSnackbar(key));
          },
          content: key => <div id={key}>{formatMessage(message)}</div>
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
  enqueueSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func
};

export default withSnackbar(Notifier);
