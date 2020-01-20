import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../services/auth';


export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const onLoginSubmit = (e) => {
    e.preventDefault();
    console.log('AAAA');

    dispatch(logIn(email, password, history));
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
          {/* <FacebookLogin
            appId="1088597931155576"
            autoLoad
            fields="name,email,picture"
            callback={responseFacebook}
          /> */}
        </div>
        <div>
          <GoogleLogin
            clientId="739589948921-ouh7vjufecr3m5po3f2jot94chlv5pgk.apps.googleusercontent.com"
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
