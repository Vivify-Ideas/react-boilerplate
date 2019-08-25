import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, fade } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { indigo } from '@material-ui/core/colors';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import config from 'config';

const StyledButton = withStyles(theme => ({
  root: {
    color: indigo[500],
    '&:hover': {
      backgroundColor: fade(indigo[500], 0.08),
      borderColor: indigo[500]
    },
    borderColor: fade(indigo[500], 0.5),
    margin: theme.spacing(3, 0, 2, 0)
  }
}))(Button);

export function FacebookButton({ children, callback, disabled }) {
  function handleOnCallback(response) {
    callback(response, 'facebook');
  }

  return (
    <FacebookLogin
      appId={config.social.facebookAppId}
      callback={handleOnCallback}
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
    />
  );
}

FacebookButton.propTypes = {
  callback: PropTypes.func,
  disabled: PropTypes.bool
};

export default FacebookButton;
