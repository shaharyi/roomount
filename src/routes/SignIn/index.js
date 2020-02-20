import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import {
  Pane, Heading, minorScale,
} from 'evergreen-ui';
import { emailSignIn, facebookSignIn, googleSignIn } from '../../services/auth';
import { EmailPassword } from '../../shared/Components/EmailPassword';
import { SocialAuth } from '../../shared/Components/SocialAuth';
import {
  Container, Panel,
} from './styles';

export const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();


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
          <Heading size={600}>{formatMessage({ id: 'auth.signIn' })}</Heading>
        </Pane>
        <SocialAuth centered onFacebook={onFbAuthed} onGoogle={onGoogleAuthed} />
        <Heading />
        <EmailPassword centered onSubmit={onEmailSubmitted} label={formatMessage({ id: 'auth.signIn' })} />
        <Pane />
      </Panel>
    </Container>
  );
};
