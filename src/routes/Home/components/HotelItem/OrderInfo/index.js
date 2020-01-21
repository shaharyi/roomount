import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Button, Strong, Pane, Paragraph,
} from 'evergreen-ui';
import { Container } from './styles';

export const OrderInfo = ({ nights, adults, children }) => (
  <Pane>
    <Paragraph>
      <Strong>{nights}</Strong>
      <Text> nights</Text>
    </Paragraph>
    <Paragraph>
      <Strong>{adults}</Strong>
      <Text> adults</Text>
    </Paragraph>
    <Paragraph>
      <Strong>{children}</Strong>
      <Text> children</Text>
    </Paragraph>
  </Pane>
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
