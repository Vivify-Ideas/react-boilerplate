import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import config from 'config';

export function FacebookButton({ callback, disabled, children }) {
  function handleOnCallback(response) {
    callback(response, 'facebook');
  }

  return (
    <FacebookLogin
      appId={config.social.facebookAppId}
      callback={handleOnCallback}
      isDisabled={disabled}
      render={({ onClick, isDisabled, isProcessing, isSdkLoaded }) => (
        <button
          onClick={onClick}
          disabled={isDisabled || isProcessing || !isSdkLoaded}
        >
          {children}
        </button>
      )}
    />
  );
}

FacebookButton.propTypes = {
  callback: PropTypes.func,
  disabled: PropTypes.bool
};

export default FacebookButton;
