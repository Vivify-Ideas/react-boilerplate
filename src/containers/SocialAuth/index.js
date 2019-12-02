import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsSocialAuthPending } from './selectors';
import { socialAuthentication } from './actions';
import FacebookButton from 'components/FacebookButton';
import GoogleButton from 'components/GoogleButton';
import reducer from './reducer';
import saga from './saga';

const key = 'socialAuth';

function SocialAuth({ facebookButtonText, googleButtonText }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
  googleButtonText: PropTypes.node
};

export default SocialAuth;
