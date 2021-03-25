import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated } from 'store/auth/selectors';

export function PublicRoute({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PublicRoute);
