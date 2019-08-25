import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUser } from 'containers/App/selectors';
import {
  makeSelectIsUpdateUserPending,
  makeSelectIsChangePasswordPending
} from './selectors';
import { updateUser, changePassword } from './actions';
import UpdateUserForm from './UpdateUserForm';
import ChangePasswordForm from './ChangePasswordForm';
import reducer from './reducer';
import saga from './saga';

const useStyles = makeStyles(theme => ({
  topPaper: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const key = 'userProfile';

export function UserProfilePage({
  user,
  isUpdateUserPending,
  isChangePasswordPending,
  updateUser,
  changePassword
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const classes = useStyles();

  return (
    <Container maxWidth="xs" component="main">
      <Helmet>
        <title>Profile - React Boilerplate</title>
      </Helmet>
      <Paper className={classes.topPaper}>
        <UpdateUserForm
          user={user}
          isPending={isUpdateUserPending}
          onSubmit={updateUser}
        />
      </Paper>
      <Paper className={classes.paper}>
        <ChangePasswordForm
          isPending={isChangePasswordPending}
          onSubmit={changePassword}
        />
      </Paper>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isUpdateUserPending: makeSelectIsUpdateUserPending(),
  isChangePasswordPending: makeSelectIsChangePasswordPending()
});

const mapDispatchToProps = {
  updateUser,
  changePassword
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(UserProfilePage);
