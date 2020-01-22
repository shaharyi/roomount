import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput, Button, minorScale,
} from 'evergreen-ui';
import { Form } from './styles';

export const EmailPassword = ({ onSubmit, label }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLoginSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };
  return (
    <Form onSubmit={onLoginSubmit}>
      <TextInput width="100%" marginBottom={minorScale(2)} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email" />
      <TextInput width="100%" marginBottom={minorScale(2)} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
      <Button width="auto" appearance="primary" type="submit">{label}</Button>
    </Form>
  );
};

EmailPassword.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
