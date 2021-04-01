import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { makeSelectNotifications } from 'store/notifier/selectors';
import { removeSnackbar } from 'store/notifier/actions';

export function Notifier({ enqueueSnackbar, closeSnackbar }) {
  const displayed = useRef([]);

  const dispatch = useDispatch();
  const notifications = useSelector(makeSelectNotifications());

  const { t } = useTranslation();

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
          content: (key) => <div id={key}>{t(message)}</div>,
        });

        storeDisplayed(key);
      }
    });
  });

  const storeDisplayed = (id) => {
    displayed.current = [...displayed.current, id];
  };

  return null;
}

Notifier.propTypes = {
  enqueueSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func,
};

export default withSnackbar(Notifier);
