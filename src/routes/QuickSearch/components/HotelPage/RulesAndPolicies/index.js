import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { Pane, Paragraph, minorScale } from 'evergreen-ui';
import { CardIcon } from './styles';

export const RulesAndPolicies = () => {
  const { formatMessage } = useIntl();
  const { info: { rulesAndPoliciesInfo } } = useSelector((state) => state.search.fullDetails);
  return (
    <Pane>
      <Paragraph>
        {`${formatMessage({ id: 'hotelPage.rulesAndPoliciesInfo.checkIn' })}: ${rulesAndPoliciesInfo.checkIn}`}
      </Paragraph>
      <Paragraph>
        {`${formatMessage({ id: 'hotelPage.rulesAndPoliciesInfo.checkOut' })}: ${rulesAndPoliciesInfo.checkOut}`}
      </Paragraph>
      <Paragraph>
        {`${formatMessage({ id: 'hotelPage.rulesAndPoliciesInfo.childrenAndExtraBeds' })}: ${rulesAndPoliciesInfo.childrenAndExtraBeds}`}
      </Paragraph>
      <Paragraph>
        {`${formatMessage({ id: 'hotelPage.rulesAndPoliciesInfo.pets' })}: ${rulesAndPoliciesInfo.pets}`}
      </Paragraph>
      <Pane>
        <Paragraph>
          {`${formatMessage({ id: 'hotelPage.rulesAndPoliciesInfo.acceptedCards' })}:`}
        </Paragraph>
        <Paragraph>
          {rulesAndPoliciesInfo.acceptedCards.map((card) => <CardIcon key={card} type={card} />)}
        </Paragraph>
        <Paragraph size={300}>
          {formatMessage({ id: 'hotelPage.rulesAndPoliciesInfo.finePrint' })}
        </Paragraph>
      </Pane>

    </Pane>
  );
};
