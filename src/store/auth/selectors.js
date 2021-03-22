import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = (state) => state.auth || initialState;

const makeSelectIsLoginPending = () =>
  createSelector(selectAuth, (substate) => substate.isPending);

const makeSelectUser = () =>
  createSelector(selectAuth, (substate) => substate.user);

const makeSelectIsAuthenticated = () =>
  createSelector(selectAuth, (substate) => !!substate.token);

const makeSelectError = () =>
  createSelector(selectAuth, (substate) => substate.error);

const makeSelectToken = () =>
  createSelector(selectAuth, (substate) => substate.token);

export {
  makeSelectIsLoginPending,
  makeSelectUser,
  makeSelectError,
  makeSelectIsAuthenticated,
  makeSelectToken,
};
