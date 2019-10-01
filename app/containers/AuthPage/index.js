/**
 *
 * AuthPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createSelector, createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Container, FormContainer, Title, SubmitButton, Form } from './styles';
import LabeledInput from '../../components/LabeledInput';
import BackgroundImage from '../../components/BackgroundImage';

export function AuthPage({ match }) {
  const { type } = match.params;
  const isLogin = type === 'login';

  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Helmet>
        <title>AuthPage</title>
        <meta name="description" content={`${type.toUpperCase()}`} />
      </Helmet>
      <BackgroundImage />
      {isLogin ? (
        <FormContainer>
          <Title>
            <FormattedMessage {...messages.loginTitle} />
          </Title>
          <Form
            onSubmit={e => {
              e.preventDefault();
              console.log(password, email);
            }}
          >
            <LabeledInput
              value={email}
              type="email"
              setValue={setEmail}
              labelText="Email Address"
            />
            <LabeledInput
              value={password}
              type="password"
              setValue={setPassword}
              labelText="Password"
            />
            <SubmitButton type="submit" />
          </Form>
        </FormContainer>
      ) : (
        <FormContainer>
          <FormattedMessage {...messages.registerTitle} />
        </FormContainer>
      )}
    </Container>
  );
}

AuthPage.propTypes = {
  match: PropTypes.object, // react route
};

const mapStateToProps = createStructuredSelector({
  authPage: createSelector(
    state => state.authPage || {},
    substate => substate,
  ),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthPage);
