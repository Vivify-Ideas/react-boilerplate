import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import config from 'config';

export function GoogleButton({ callback, disabled, children }) {
  function handleResponse(response) {
    callback(response, 'google');
  }

  return (
    <GoogleLogin
      clientId={config.social.googleClientId}
      onSuccess={handleResponse}
      onFailure={handleResponse}
      cookiePolicy={'single_host_origin'}
      disabled={disabled}
      render={props => <button {...props}>{children}</button>}
    />
  );
}

GoogleButton.propTypes = {
  callback: PropTypes.func,
  disabled: PropTypes.bool
};

export default GoogleButton;
