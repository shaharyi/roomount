import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export const OrderInfo = ({ nights, adults, children }) => (
  <Container>
    <div>
      <span>{nights}</span>
      <span>nights</span>
    </div>
    <div>
      <span>{adults}</span>
      <span>adults</span>
    </div>
    <div>
      <span>{children}</span>
      <span>children</span>
    </div>
    {`${nights} nights`}
    {`${adults} adults`}
    {`${children} children`}
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
