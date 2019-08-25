import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsSocialAuthPending } from './selectors';
import { socialAuthentication } from './actions';
import FacebookButton from 'components/FacebookButton';
import GoogleButton from 'components/GoogleButton';
import reducer from './reducer';
import saga from './saga';

const key = 'socialAuth';

export function SocialAuth({
  facebookButtonText,
  googleButtonText,
  socialAuthentication,
  isSocialAuthPending
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  function handleSocilaNetworkResponse(response, provider) {
    if (response.accessToken) {
      socialAuthentication(response.accessToken, provider);
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

const mapStateToProps = createStructuredSelector({
  isSocialAuthPending: makeSelectIsSocialAuthPending()
});

const mapDispatchToProps = {
  socialAuthentication
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(SocialAuth);
