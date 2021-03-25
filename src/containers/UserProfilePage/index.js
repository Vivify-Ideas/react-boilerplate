import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { makeSelectUser } from 'store/auth/selectors';
import {
  makeSelectIsUpdateUserPending,
  makeSelectIsChangePasswordPending,
} from 'store/profile/selectors';
import { updateUser, changePassword } from 'store/profile/actions';
import UpdateUserForm from './UpdateUserForm';
import ChangePasswordForm from './ChangePasswordForm';

function UserProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(makeSelectUser());
  const isUpdateUserPending = useSelector(makeSelectIsUpdateUserPending());
  const isChangePasswordPending = useSelector(
    makeSelectIsChangePasswordPending()
  );
  const submitUpdateUserForm = useCallback(
    (...args) => dispatch(updateUser(...args)),
    [dispatch]
  );
  const submitChangePasswordForm = useCallback(
    (...args) => dispatch(changePassword(...args)),
    [dispatch]
  );

  return (
    <main>
      <Helmet>
        <title>Profile - React Boilerplate</title>
      </Helmet>
      <UpdateUserForm
        user={user}
        isPending={isUpdateUserPending}
        onSubmit={submitUpdateUserForm}
      />
      <ChangePasswordForm
        isPending={isChangePasswordPending}
        onSubmit={submitChangePasswordForm}
      />
    </main>
  );
}

export default UserProfilePage;
