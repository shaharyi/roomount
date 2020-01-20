import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export const OrderInfo = ({ nights, adults, children }) => (
  <Container>
    <div>{`${nights} nights`}</div>
    <div>{`${adults} adults`}</div>
    <div>{`${children} children`}</div>
  </Container>
);

OrderInfo.propTypes = {
  nights: PropTypes.number,
  adults: PropTypes.number,
  children: PropTypes.number,
};

OrderInfo.defaultProps = {
  nights: 0,
  adults: 0,
  children: 0,
};
