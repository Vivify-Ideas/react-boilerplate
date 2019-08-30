import produce from 'immer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export const initialState = {
  isPending: false
};

/* eslint-disable default-case */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.isPending = true;
        break;
      case LOGIN_SUCCESS:
      case LOGIN_ERROR:
        draft.isPending = false;
        break;
    }
  });

export default loginReducer;
