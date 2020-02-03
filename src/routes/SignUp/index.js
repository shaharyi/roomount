/* eslint-disable react/no-unescaped-entities */
import {
  Pane, Heading, minorScale, Text, Paragraph, Dialog, Button,
} from 'evergreen-ui';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { emailSignUp, facebookSignUp, googleSignUp } from '../../services/auth';
import { EmailPassword } from '../../shared/components/EmailPassword';
import { SocialAuth } from '../../shared/components/SocialAuth';
import {
  Container, Panel, StyledSpinner,
} from './styles';

export const SignUp = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState(null);

  const onEmailSubmitted = (email, password) => {
    setSignUpDetails({ type: 'email', args: [email, password] });
    setShowPopup(true);
  };

  const onGoogleAuthed = (googleUser) => {
    setSignUpDetails({ type: 'google', args: [googleUser] });
    setShowPopup(true);
  };
  const onFbAuthed = (fbUser) => {
    setSignUpDetails({ type: 'fb', args: [fbUser] });
    setShowPopup(true);
  };

  const signup = () => {
    setLoading(true);
    switch (signUpDetails.type) {
      case 'email': dispatch(emailSignUp(...signUpDetails.args, history));
        break;
      case 'fb': dispatch(googleSignUp(...signUpDetails.args, history));
        break;
      case 'google': dispatch(facebookSignUp(...signUpDetails.args, history));
        break;
      default: console.log('undefined', signUpDetails);
    }
  };

  return (
    <Container>
      <Panel>
        <Pane marginBottom={minorScale(4)}>
          <Heading size={600}>
            {formatMessage({ id: 'signUp.signUp' })}
          </Heading>
        </Pane>
        <Pane marginBottom={minorScale(4)}>
          <Paragraph color="info">
            {formatMessage({ id: 'signUp.freeMembership' })}
          </Paragraph>
          <Paragraph color="info">
            {formatMessage({ id: 'signUp.canUnsubscribe' })}
          </Paragraph>
        </Pane>
        <Pane width={250}>
          <Paragraph color="info">
            {formatMessage({ id: 'signUp.social' })}

          </Paragraph>
          <SocialAuth centered={false} onFacebook={onFbAuthed} onGoogle={onGoogleAuthed} />
          <Paragraph color="info">
            {formatMessage({ id: 'signUp.email' })}
          </Paragraph>
          <EmailPassword onSubmit={onEmailSubmitted} label="Sign Up" centered={false} />
        </Pane>
        <Paragraph marginBottom={minorScale(4)}>
          <Text>
            {formatMessage({ id: 'signUp.alreadyMember' })}
          </Text>
          <Link to="/signin">{formatMessage({ id: 'auth.signIn' })}</Link>
        </Paragraph>
        <Paragraph size={300} color="muted">
          {formatMessage({ id: 'signUp.sslTechnology' })}
        </Paragraph>
        <Paragraph size={300} color="muted">
          {formatMessage({ id: 'signUp.emailUsage' })}
        </Paragraph>
        <Pane />
      </Panel>
      <Dialog
        isShown={showPopup}
        onCloseComplete={() => setShowPopup(false)}
        hasFooter={false}
        hasHeader={false}
      >
        <Paragraph>
          {formatMessage({ id: 'signUp.doGood1' })}

        </Paragraph>
        <Paragraph marginBottom={minorScale(3)}>
          {formatMessage({ id: 'signUp.doGood2' })}


          {' '}
          <Text color="danger">{formatMessage({ id: 'signUp.doGood3' })}</Text>
          {' '}
          {formatMessage({ id: 'signUp.doGood4' })}
          {' '}
          <Text color="success">{formatMessage({ id: 'signUp.doGood5' })}</Text>
          {' '}
          {formatMessage({ id: 'signUp.doGood6' })}

        </Paragraph>
        <Button appearance="primary" onClick={signup}>
          {loading ? <StyledSpinner size={20} /> : formatMessage({ id: 'signUp.iAgree' })}
        </Button>
      </Dialog>
    </Container>
  );
};
