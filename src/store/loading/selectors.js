import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoading = (state) => state.loading || initialState;

const makeSelectIsLoading = (action) =>
  createSelector(selectLoading, (substate) =>
    substate.loader.actions.some((_action) => _action.name === action)
  );

export { makeSelectIsLoading };
