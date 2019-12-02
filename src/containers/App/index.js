import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import { useInjectSaga } from 'utils/injectSaga';
import Notifier from 'containers/Notifier';
import Routes from './Routes';
import { fetchAuthenticatedUser, logout } from './actions';
import { makeSelectToken, makeSelectUser } from './selectors';
import saga from './saga';
import AppBar from 'components/AppBar';

const key = 'app';

function App() {
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  const token = useSelector(makeSelectToken());
  const user = useSelector(makeSelectUser());
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchAuthenticatedUser());
    }
  }, [token, dispatch]);

  const renderLoadingIndicator = <div>Loading...</div>;

  return (
    <HelmetProvider>
      <SnackbarProvider>
        <Helmet>
          <title>React Boilerplate</title>
        </Helmet>
        {token && !user ? (
          renderLoadingIndicator
        ) : (
          <>
            {user && <AppBar onLogout={handleLogout} />}
            <Routes />
          </>
        )}
        <Notifier />
      </SnackbarProvider>
    </HelmetProvider>
  );
}

export default App;
