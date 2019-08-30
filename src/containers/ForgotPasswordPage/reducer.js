import produce from 'immer';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR
} from './constants';

export const initialState = {
  isPending: false
};

/* eslint-disable default-case */
const forgotPasswordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST:
        draft.isPending = true;
        break;
      case FORGOT_PASSWORD_SUCCESS:
      case FORGOT_PASSWORD_ERROR:
        draft.isPending = false;
        break;
    }
  });

export default forgotPasswordReducer;
