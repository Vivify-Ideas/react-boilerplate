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
import { makeSelectIsLoginPending } from './selectors';
import { login } from './actions';
import SocialAuth from 'containers/SocialAuth';
import LoginForm from './LoginForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'login';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(8),
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

export function LoginPage({ login, isLoginPending, isSocialAuthPending }) {
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
        <title>Login - React Boilerplate</title>
      </Helmet>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage {...messages.loginTitle} />
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
              <LoginForm onSubmit={login} isPending={isLoginPending} />
            </Grid>
            <Grid container justify="flex-end">
              <Grid item xs>
                <Link
                  component={RouterLink}
                  to="/forgot-password"
                  variant="body2"
                >
                  <FormattedMessage {...messages.forgotPasswordLink} />
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/register" variant="body2">
                  <FormattedMessage {...messages.registerLink} />
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
  isLoginPending: makeSelectIsLoginPending(),
  isSocialAuthPending: makeSelectIsSocialAuthPending()
});

const mapDispatchToProps = {
  login
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(LoginPage);
