import produce from 'immer';
import { START_ACTION, STOP_ACTION } from './actionTypes';

export const initialState = {
  loader: {
    actions: [],
  },
};

/* eslint-disable default-case */
const loadingReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case START_ACTION:
        draft.loader.actions.push(action.payload.action);
        break;
      case STOP_ACTION:
        draft.loader.actions = draft.loader.actions.filter(
          (_action) => _action.name !== action.payload.action.name
        );
        break;
    }
  });

export default loadingReducer;
