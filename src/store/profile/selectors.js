import { makeSelectIsLoading } from '../loading/selectors';
import { UPDATE_USER_REQUEST, CHANGE_PASSWORD_REQUEST } from './actionTypes';

const makeSelectIsUpdateUserPending = () =>
  makeSelectIsLoading(UPDATE_USER_REQUEST);

const makeSelectIsChangePasswordPending = () =>
  makeSelectIsLoading(CHANGE_PASSWORD_REQUEST);

export { makeSelectIsUpdateUserPending, makeSelectIsChangePasswordPending };
