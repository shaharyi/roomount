/* eslint-disable react/require-default-props */
import {
  Text,
} from 'evergreen-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { SocialWrapper, SocialButton, SocialIcon } from './styles';
import FB_SVG from './images/fb.svg';
import GOOGLE_SVG from './images/google.svg';

export const SocialAuth = ({
  centered, onFacebook, onGoogle, disabled,
}) => {
  console.log(disabled);

  const onGoogleError = (data) => {
    console.error(data);
  };

  const onGoogleSuccess = (response) => {
    onGoogle(response.profileObj);
  };
  return (
    <SocialWrapper centered={centered}>
      <FacebookLogin
        appId="469693480570889"
        fields="name,email,picture"
        callback={onFacebook}
        render={(renderProps) => (
          <SocialButton onClick={renderProps.onClick}>
            <SocialIcon src={FB_SVG} />
            <Text>Facebook</Text>
          </SocialButton>
        )}
      />
      <GoogleLogin
        clientId="739589948921-3rbapbvijd93c7tufhkn43m1p68bg44s.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleError}
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
          <SocialButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <SocialIcon src={GOOGLE_SVG} />
            <Text>Google</Text>
          </SocialButton>
        )}
      />

    </SocialWrapper>
  );
};


SocialAuth.propTypes = {
  onFacebook: PropTypes.func,
  onGoogle: PropTypes.func,
  disabled: PropTypes.bool,
  centered: PropTypes.bool,
};
