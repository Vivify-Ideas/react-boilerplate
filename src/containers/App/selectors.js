import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = state => state.app || initialState;

const makeSelectUser = () =>
  createSelector(
    selectApp,
    substate => substate.user
  );

const makeSelectIsAuthenticated = () =>
  createSelector(
    selectApp,
    substate => !!substate.token
  );

const makeSelectError = () =>
  createSelector(
    selectApp,
    substate => substate.error
  );

const makeSelectToken = () =>
  createSelector(
    selectApp,
    substate => substate.token
  );

export {
  makeSelectUser,
  makeSelectError,
  makeSelectIsAuthenticated,
  makeSelectToken
};
