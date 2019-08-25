import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const makeSelectIsLoginPending = () =>
  createSelector(
    selectLogin,
    substate => substate.isPending
  );

export { makeSelectIsLoginPending };
