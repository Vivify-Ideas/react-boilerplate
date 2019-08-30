import produce from 'immer';
import { ENQUEUE_SNACKBAR, REMOVE_SNACKBAR, CLOSE_SNACKBAR } from './constants';

export const initialState = {
  notifications: []
};

/* eslint-disable default-case */
const notifierReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ENQUEUE_SNACKBAR:
        draft.notifications.push({
          key: action.notification.key,
          ...action.notification
        });
        break;
      case CLOSE_SNACKBAR:
        draft.notifications = draft.notifications.map(notification => {
          if (action.dismissAll || notification.key === action.key) {
            notification.dismissed = true;
          }
          return notification;
        });
        break;
      case REMOVE_SNACKBAR:
        draft.notifications = draft.notifications.filter(
          notification => notification.key !== action.key
        );
        break;
    }
  });

export default notifierReducer;
