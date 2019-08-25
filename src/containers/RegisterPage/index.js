import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsSocialAuthPending } from 'containers/SocialAuth/selectors';
import { makeSelectIsRegisterPending } from './selectors';
import { register } from './actions';
import SocialAuth from 'containers/SocialAuth';
import RegisterForm from './RegisterForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'register';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    marginTop: theme.spacing(3)
  }
}));

export function RegisterPage({
  register,
  isRegisterPending,
  isSocialAuthPending
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const classes = useStyles();

  const renderPendingIndicator = (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );

  return (
    <Container component="main" maxWidth="xs">
      <Helmet>
        <title>Register - React Boilerplate</title>
      </Helmet>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage {...messages.registerTitle} />
        </Typography>
        {!isSocialAuthPending ? (
          <>
            <Grid>
              <SocialAuth
                facebookButtonText={
                  <FormattedMessage {...messages.facebookButton} />
                }
                googleButtonText={
                  <FormattedMessage {...messages.googleButton} />
                }
              />
              <Divider />
              <RegisterForm onSubmit={register} isPending={isRegisterPending} />
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  <FormattedMessage {...messages.loginLink} />
                </Link>
              </Grid>
            </Grid>
          </>
        ) : (
          renderPendingIndicator
        )}
      </Paper>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  isRegisterPending: makeSelectIsRegisterPending(),
  isSocialAuthPending: makeSelectIsSocialAuthPending()
});

const mapDispatchToProps = {
  register
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(RegisterPage);
