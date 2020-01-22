/* eslint-disable react/no-unescaped-entities */
import {
  Pane, Heading, minorScale, Text, Paragraph, Dialog, Button,
} from 'evergreen-ui';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { emailSignUp, facebookSignUp, googleSignUp } from '../../services/auth';
import { EmailPassword } from '../../shared/components/EmailPassword';
import { SocialAuth } from '../../shared/components/SocialAuth';
import {
  Container, Panel, StyledSpinner,
} from './styles';

export const SignUp = () => {
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
          <Heading size={600}>Sign Up</Heading>
        </Pane>
        <Pane marginBottom={minorScale(4)}>
          <Paragraph color="info">
            Membership is free!  We charge no fee, of any kind.
          </Paragraph>
          <Paragraph color="info">
          You can unsubscribe our membership any time (link is at bottom of our main page)
          </Paragraph>
        </Pane>
        <Pane width={250}>
          <Paragraph color="info">
          Sign Via Facebook \ Google
          </Paragraph>
          <SocialAuth centered={false} onFacebook={onFbAuthed} onGoogle={onGoogleAuthed} />
          <Paragraph color="info">
          Sign With Email
          </Paragraph>
          <EmailPassword onSubmit={onEmailSubmitted} label="Sign Up" centered={false} />
        </Pane>
        <Paragraph marginBottom={minorScale(4)}>
          <Text>Already a member and we haven't recognized you?</Text>
          <Link to="/signin">Sign In</Link>
        </Paragraph>
        <Paragraph size={300} color="muted">
        This site is using SSL technology. Your details are kept encypted
        </Paragraph>
        <Paragraph size={300} color="muted">
        We'll use your email only to confirm registration or hotel reservation,
        or to contact you in case of problem. No spam or 3rd party use.
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
We want to do good and give back to the community and Planet Earth,
        </Paragraph>
        <Paragraph marginBottom={minorScale(3)}>
Hence we ask our members for a
          {' '}
          <Text color="danger">one time</Text>
          {' '}
purchase of portion of
          {' '}
          <Text color="success">a tree that will be planted</Text>
          {' '}
At cost of 5 cents (0.05 Dollar or 0.05 Euro, depending on your location).
You WILL NOT be charged now, but only when you make your first hotel reservation on Roomount
        </Paragraph>
        <Button appearance="primary" onClick={signup}>
          {loading ? <StyledSpinner size={20} /> : 'I Agree, now got on'}
        </Button>
      </Dialog>
    </Container>
  );
};
