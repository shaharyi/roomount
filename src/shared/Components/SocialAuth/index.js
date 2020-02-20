/* eslint-disable react/require-default-props */
import {
  Text,
} from 'evergreen-ui';
import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { GoogleLogin } from './node_modules/react-google-login';
import FacebookLogin from './node_modules/react-facebook-login/dist/facebook-login-render-props';
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
