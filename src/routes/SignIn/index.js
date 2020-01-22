import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Pane, Heading, minorScale,
} from 'evergreen-ui';
import { emailSignIn, facebookSignIn, googleSignIn } from '../../services/auth';
import { EmailPassword } from '../../shared/components/EmailPassword';
import { SocialAuth } from '../../shared/components/SocialAuth';
import {
  Container, Panel,
} from './styles';

export const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();


  const onEmailSubmitted = (email, password) => {
    dispatch(emailSignIn(email, password, history));
  };

  const onGoogleAuthed = (googleUser) => {
    dispatch(googleSignIn(googleUser, history));
  };
  const onFbAuthed = (fbUser) => {
    dispatch(facebookSignIn(fbUser, history));
  };

  return (
    <Container>
      <Panel>
        <Pane marginBottom={minorScale(4)}>
          <Heading size={600}>Sign in</Heading>
        </Pane>
        <SocialAuth centered onFacebook={onFbAuthed} onGoogle={onGoogleAuthed} />
        <Heading />
        <EmailPassword centered onSubmit={onEmailSubmitted} label="Sign In" />
        <Pane />
      </Panel>
    </Container>
  );
};
