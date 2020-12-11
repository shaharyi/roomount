/* eslint-disable react/require-default-props */
import {
  TextInput, Button, minorScale,
} from 'evergreen-ui';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from './styles';

export const EmailPassword = ({
  centered, onSubmit, label, error,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLoginSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };
  return (
    <Form onSubmit={onLoginSubmit} centered={centered}>
      <TextInput
        isInvalid={error}
        width="100%"
        marginBottom={minorScale(2)}
        value={email || process.env.REACT_APP_DEF_USER }
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="email"
      />
      <TextInput
        isInvalid={error}
        width="100%"
        marginBottom={minorScale(2)}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <Button width="auto" appearance="primary" type="submit">{label}</Button>
    </Form>
  );
};

EmailPassword.propTypes = {
  onSubmit: PropTypes.func,
  label: PropTypes.string,
  centered: PropTypes.bool,
  error: PropTypes.bool,
};
