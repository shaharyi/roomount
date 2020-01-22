import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from 'react-router-dom';
import { emailLogin, facebookLogin, googleLogin } from '../../services/auth';


export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const onLoginSubmit = (e) => {
    e.preventDefault();
    console.log('AAAA');

    dispatch(emailLogin(email, password, history));
  };

  const onGoogleError = (data) => {
    console.log(data);
  };
  const onGoogleSuccess = (response) => {
    dispatch(googleLogin(response.profileObj, history));
  };
  const responseFacebook = (fbUser) => {
    dispatch(facebookLogin(fbUser, history));
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <FacebookLogin
            appId="469693480570889"
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>
        <div>
          {/* "Not a valid origin for the client: http://localhost:3000 has not been whitelisted for client ID 739589948921-3rbapbvijd93c7tufhkn43m1p68bg44s.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and whitelist this origin for your project's client ID." */}
          <GoogleLogin
            clientId="739589948921-3rbapbvijd93c7tufhkn43m1p68bg44s.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onGoogleSuccess}
            onFailure={onGoogleError}
            cookiePolicy="single_host_origin"
          />

        </div>
        <div>
          <form onSubmit={onLoginSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
