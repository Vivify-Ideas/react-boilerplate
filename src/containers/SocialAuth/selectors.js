import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSocialAuth = state => state.socialAuth || initialState;

const makeSelectIsSocialAuthPending = () =>
  createSelector(
    selectSocialAuth,
    substate => substate.isPending
  );

export { makeSelectIsSocialAuthPending };
