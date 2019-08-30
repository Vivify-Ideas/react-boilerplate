import produce from 'immer';
import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR
} from './constants';

export const initialState = {
  isUpdateUserPending: false,
  isChangePasswordPending: false
};

/* eslint-disable default-case */
const userProfileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
        draft.isUpdateUserPending = true;
        break;
      case UPDATE_USER_SUCCESS:
      case UPDATE_USER_ERROR:
        draft.isUpdateUserPending = false;
        break;
      case CHANGE_PASSWORD_REQUEST:
        draft.isChangePasswordPending = true;
        break;
      case CHANGE_PASSWORD_SUCCESS:
      case CHANGE_PASSWORD_ERROR:
        draft.isChangePasswordPending = false;
        break;
    }
  });

export default userProfileReducer;
