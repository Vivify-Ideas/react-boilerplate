import produce from 'immer';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './constants';

export const initialState = {
  isPending: false
};

/* eslint-disable default-case */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_REQUEST:
        draft.isPending = true;
        break;
      case REGISTER_SUCCESS:
      case REGISTER_ERROR:
        draft.isPending = false;
        break;
    }
  });

export default registerReducer;
