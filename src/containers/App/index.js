import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useInjectSaga } from 'utils/injectSaga';
import Notifier from 'containers/Notifier';
import Routes from './Routes';
import { fetchAuthenticatedUser } from './actions';
import { makeSelectToken, makeSelectUser } from './selectors';
import saga from './saga';

const key = 'app';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export function App({ token, user, fetchAuthenticatedUser }) {
  useInjectSaga({ key, saga });

  const classes = useStyles();

  useEffect(() => {
    if (token) {
      fetchAuthenticatedUser();
    }
  }, [token, fetchAuthenticatedUser]);

  const renderLoadingIndicator = (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );

  return (
    <SnackbarProvider>
      <CssBaseline />
      <Helmet>
        <title>React Boilerplate</title>
      </Helmet>
      {token && !user ? renderLoadingIndicator : <Routes />}
      <Notifier />
    </SnackbarProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  user: makeSelectUser()
});

const mapDispatchToProps = {
  fetchAuthenticatedUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(App);
