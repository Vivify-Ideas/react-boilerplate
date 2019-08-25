import produce from 'immer';
import { DEFAULT_ACTION } from './actions';

export const initialState = {};

/* eslint-disable default-case */
const dashboardReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default dashboardReducer;
