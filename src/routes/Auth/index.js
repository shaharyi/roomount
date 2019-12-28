import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { logIn } from '../../services/auth';


export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const dispatchLogin = logIn(dispatch);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatchLogin(email, password);
  };
  const responseGoogle = (data) => {
    console.log(data);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <FacebookLogin
            appId="1088597931155576"
            autoLoad
            fields="name,email,picture"
            callback={responseFacebook}
          />
,
        </div>
        <div>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
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
