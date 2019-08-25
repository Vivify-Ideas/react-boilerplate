import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegister = state => state.register || initialState;

const makeSelectIsRegisterPending = () =>
  createSelector(
    selectRegister,
    substate => substate.isPending
  );

export { makeSelectIsRegisterPending };
