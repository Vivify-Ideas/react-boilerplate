import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, fade } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deepOrange } from '@material-ui/core/colors';
import GoogleLogin from 'react-google-login';
import config from 'config';

const StyledButton = withStyles(theme => ({
  root: {
    color: deepOrange[500],
    '&:hover': {
      backgroundColor: fade(deepOrange[500], 0.08),
      borderColor: deepOrange[500]
    },
    borderColor: fade(deepOrange[500], 0.5),
    margin: theme.spacing(0, 0, 3, 0)
  }
}))(Button);

export function GoogleButton({ children, callback, disabled }) {
  function handleResponse(response) {
    callback(response, 'google');
  }

  return (
    <GoogleLogin
      clientId={config.social.googleClientId}
      render={({ onClick }) => (
        <StyledButton
          fullWidth
          variant="outlined"
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </StyledButton>
      )}
      onSuccess={handleResponse}
      onFailure={handleResponse}
      cookiePolicy={'single_host_origin'}
    />
  );
}

GoogleButton.propTypes = {
  callback: PropTypes.func,
  disabled: PropTypes.bool
};

export default GoogleButton;
