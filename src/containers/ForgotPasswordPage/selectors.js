import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForgotPassword = state => state.forgotPassword || initialState;

const makeSelectIsForgotPasswordPending = () =>
  createSelector(
    selectForgotPassword,
    substate => substate.isPending
  );

export { makeSelectIsForgotPasswordPending };
