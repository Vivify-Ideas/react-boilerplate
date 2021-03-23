import produce from 'immer';
import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './actionTypes';

export const initialState = {};

/* eslint-disable default-case */
const userProfileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case UPDATE_USER_SUCCESS:
      case UPDATE_USER_ERROR:
      case CHANGE_PASSWORD_REQUEST:
      case CHANGE_PASSWORD_SUCCESS:
      case CHANGE_PASSWORD_ERROR:
        break;
    }
  });

export default userProfileReducer;
