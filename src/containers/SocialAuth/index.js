import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectIsSocialAuthPending } from 'store/auth/selectors';
import { socialAuthentication } from 'store/auth/actions';
import FacebookButton from 'components/FacebookButton';
import GoogleButton from 'components/GoogleButton';
function SocialAuth({ facebookButtonText, googleButtonText }) {
  const dispatch = useDispatch();
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());

  function handleSocilaNetworkResponse(response, provider) {
    if (response.accessToken) {
      dispatch(socialAuthentication(response.accessToken, provider));
    }
  }

  return (
    <>
      <FacebookButton
        callback={handleSocilaNetworkResponse}
        disabled={isSocialAuthPending}
      >
        {facebookButtonText}
      </FacebookButton>
      <GoogleButton
        callback={handleSocilaNetworkResponse}
        disabled={isSocialAuthPending}
      >
        {googleButtonText}
      </GoogleButton>
    </>
  );
}

SocialAuth.propTypes = {
  facebookButtonText: PropTypes.node,
  googleButtonText: PropTypes.node,
};

export default SocialAuth;
