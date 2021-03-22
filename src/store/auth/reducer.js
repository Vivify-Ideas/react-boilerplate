import produce from 'immer';
import { getItem } from 'utils/localStorage';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  LOGOUT_SUCCESS,
  SET_TOKEN,
  SESSION_EXPIRED,
} from './actionTypes';

export const initialState = {
  isPending: false,
  token: getItem('token') || null,
  user: null,
};

/* eslint-disable default-case */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.isPending = true;
        break;
      case LOGIN_SUCCESS:
      case LOGIN_ERROR:
        draft.isPending = false;
        break;
      case FETCH_AUTHENTICATED_USER_SUCCESS:
        draft.user = action.user;
        break;
      case LOGOUT_SUCCESS:
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
