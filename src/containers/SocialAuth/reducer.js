import produce from 'immer';
import {
  SOCIAL_AUTH_REQUEST,
  SOCIAL_AUTH_SUCCESS,
  SOCIAL_AUTH_ERROR
} from './constants';

export const initialState = {
  isPending: false
};

/* eslint-disable default-case */
const socialAuthReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SOCIAL_AUTH_REQUEST:
        draft.isPending = true;
        break;
      case SOCIAL_AUTH_SUCCESS:
      case SOCIAL_AUTH_ERROR:
        draft.isPending = false;
        break;
    }
  });

export default socialAuthReducer;
