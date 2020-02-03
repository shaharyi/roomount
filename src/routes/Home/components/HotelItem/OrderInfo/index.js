import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import {
  Text, Strong, Pane, Paragraph,
} from 'evergreen-ui';

export const OrderInfo = ({ nights, adults, children }) => {
  const { formatMessage } = useIntl();
  return (
    <Pane>
      <Paragraph>
        <Text>{formatMessage({ id: 'hotel.nights' }, { nights, elem: <Strong>{nights}</Strong> })}</Text>
      </Paragraph>
      <Paragraph>
        <Text>{formatMessage({ id: 'hotel.adults' }, { adults, elem: <Strong>{adults}</Strong> })}</Text>
      </Paragraph>
      <Paragraph>
        <Text>{formatMessage({ id: 'hotel.children' }, { children: 0, elem: <Strong>{children}</Strong> })}</Text>
      </Paragraph>
    </Pane>
  );
};

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
