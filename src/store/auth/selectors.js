import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import { LOGIN_REQUEST } from './actionTypes';

const selectAuth = (state) => state.auth || initialState;

const makeSelectIsLoginPending = () => makeSelectIsLoading(LOGIN_REQUEST);

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
