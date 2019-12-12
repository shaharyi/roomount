import React from 'react';
import PropTypes from 'prop-types';
import { StyledP } from './styles';

export const P = ({ children }) => <StyledP>{children}</StyledP>;


P.defaultProps = {
  children: {},
};

P.propTypes = {
  children: PropTypes.element,
};
