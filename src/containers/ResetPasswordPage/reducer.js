import produce from 'immer';
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from './constants';

export const initialState = {
  isPending: false
};

/* eslint-disable default-case */
const resetPasswordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_PASSWORD_REQUEST:
        draft.isPending = true;
        break;
      case RESET_PASSWORD_SUCCESS:
      case RESET_PASSWORD_ERROR:
        draft.isPending = false;
        break;
    }
  });

export default resetPasswordReducer;
