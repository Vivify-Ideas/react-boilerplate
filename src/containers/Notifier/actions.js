export const NOTIFIER = '[Notifier]';

export const ENQUEUE_SNACKBAR = `${NOTIFIER} ENQUEUE_SNACKBAR`;
export const CLOSE_SNACKBAR = `${NOTIFIER} CLOSE_SNACKBAR`;
export const REMOVE_SNACKBAR = `${NOTIFIER} REMOVE_SNACKBAR`;

export function enqueueSnackbar(notification) {
  const key = notification.options && notification.options.key;

  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random()
    }
  };
}

export function closeSnackbar(key) {
  return {
    type: CLOSE_SNACKBAR,
    dismissAll: !key,
    key
  };
}

export function removeSnackbar(key) {
  return {
    type: REMOVE_SNACKBAR,
    key
  };
}
