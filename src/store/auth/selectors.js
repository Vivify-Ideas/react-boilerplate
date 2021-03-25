import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { makeSelectIsLoading } from '../loading/selectors';
import {
  LOGIN_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  REGISTER_REQUEST,
  RESET_PASSWORD_REQUEST,
  SOCIAL_AUTH_REQUEST,
} from './actionTypes';

const selectAuth = (state) => state.auth || initialState;

const makeSelectIsLoginPending = () => makeSelectIsLoading(LOGIN_REQUEST);

const makeSelectIsForgotPasswordPending = () =>
  makeSelectIsLoading(FORGOT_PASSWORD_REQUEST);

const makeSelectIsResetPasswordPending = () =>
  makeSelectIsLoading(RESET_PASSWORD_REQUEST);

const makeSelectIsSocialAuthPending = () =>
  makeSelectIsLoading(SOCIAL_AUTH_REQUEST);

const makeSelectIsRegisterPending = () => makeSelectIsLoading(REGISTER_REQUEST);

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
  makeSelectIsForgotPasswordPending,
  makeSelectIsResetPasswordPending,
  makeSelectIsSocialAuthPending,
  makeSelectIsRegisterPending,
  makeSelectUser,
  makeSelectError,
  makeSelectIsAuthenticated,
  makeSelectToken,
};
