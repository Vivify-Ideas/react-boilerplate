import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNotifier = state => state.notifier || initialState;

const makeSelectNotifications = () =>
  createSelector(
    selectNotifier,
    substate => substate.notifications
  );

export { makeSelectNotifications };
