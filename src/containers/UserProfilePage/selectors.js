import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserProfile = state => state.userProfile || initialState;

const makeSelectIsUpdateUserPending = () =>
  createSelector(
    selectUserProfile,
    substate => substate.isUpdateUserPending
  );

const makeSelectIsChangePasswordPending = () =>
  createSelector(
    selectUserProfile,
    substate => substate.isChangePasswordPending
  );

export { makeSelectIsUpdateUserPending, makeSelectIsChangePasswordPending };
