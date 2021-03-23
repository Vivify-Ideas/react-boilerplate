import produce from 'immer';
import { getItem } from 'utils/localStorage';
import {
  FETCH_AUTHENTICATED_USER_SUCCESS,
  LOGOUT_SUCCESS,
  SET_TOKEN,
  SESSION_EXPIRED,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from './actionTypes';

export const initialState = {
  token: getItem('token') || null,
  user: null,
};

/* eslint-disable default-case */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_AUTHENTICATED_USER_SUCCESS:
        draft.user = action.user;
        break;
      case LOGOUT_SUCCESS:
      case FORGOT_PASSWORD_SUCCESS:
      case FORGOT_PASSWORD_ERROR:
      case SESSION_EXPIRED:
        draft.user = null;
        draft.token = null;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
    }
  });

export default appReducer;
