/**
 *
 * LabeledInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Container, Input, Label } from './styles';

function LabeledInput({ type, value, labelText, setValue }) {
  return (
    <Container>
      <Input
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Label moveUp={!!value}>{labelText}</Label>
    </Container>
  );
}

LabeledInput.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  labelText: PropTypes.string,
};

export default LabeledInput;
