import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import {
  Heading, Button, Ul, Li, Select,
} from 'evergreen-ui';
import {
  Wrapper, Table, TableHeader, Row, Cell, NormalText,
} from './styles';
import { StickyReserveButton } from './StickyReserveButton';

const options = (new Array(9).fill()).map((a, index) => index);

export const RoomsTable = () => {
  const { formatMessage } = useIntl();
  const { info, nights } = useSelector((state) => state.search.fullDetails);
  const { roomTypes } = info;

  const getRefundElement = (type) => {
    switch (type) {
      case 'free': return (
        <NormalText>
          {formatMessage({ id: 'hotelPage.refund.free' })}
        </NormalText>
      );
      case 'partial': return (
        <NormalText className="tooltip-base" size={200}>
          <NormalText>{formatMessage({ id: 'hotelPage.refund.partial' })}</NormalText>
          <NormalText className="tooltip" size={200}>{formatMessage({ id: 'hotelPage.refund.partialTooltip' })}</NormalText>
        </NormalText>
      );
      default: return <NormalText>{formatMessage({ id: 'hotelPage.refund.none' })}</NormalText>;
    }
  };
  return (
    <Wrapper>

      <Heading>
        {formatMessage({ id: 'hotelPage.roomsAndPrices' })}
      </Heading>
      <Table>
        <TableHeader>
          <Cell>
            <NormalText>
              {formatMessage({ id: 'hotelPage.roomType' })}
            </NormalText>
          </Cell>
          <Cell>
            <NormalText>
              {formatMessage({ id: 'hotelPage.maxAdults' })}
            </NormalText>
          </Cell>
          <Cell>
            <NormalText>
              {formatMessage({ id: 'hotelPage.priceForNNight' }, { nights })}
            </NormalText>
          </Cell>
          <Cell>
            <NormalText>
              {formatMessage({ id: 'hotelPage.rateDetails' })}
            </NormalText>
          </Cell>
          <Cell>
            <NormalText>
              {formatMessage({ id: 'hotelPage.rooms' })}
            </NormalText>
          </Cell>
        </TableHeader>
        {roomTypes.map(({ type, rooms }, typeIndex) => {
          const title = type;
          const isSecondary = typeIndex % 2 === 1;
          return rooms.map((room, index) => (
            <Row
              key={room.id}
              onSelect={() => console.log(room)}
              highlight={isSecondary}
            >
              <Cell><NormalText>{index === 0 ? title : ''}</NormalText></Cell>
              <Cell><NormalText>{room.maxAdults}</NormalText></Cell>
              <Cell><NormalText>{`${room.pricePerNight * nights}$`}</NormalText></Cell>
              <Cell>
                <Ul>
                  <Li>
                    <NormalText>
                      {room.breakfastPrice === 0
                        ? 'Breakfast Included !'
                        : `Breakfast available at total cost of $${room.breakfastPrice}`}
                    </NormalText>
                  </Li>
                  <Li>
                    <NormalText>{`Free cancellation before midnight of ${new Date().toLocaleDateString()}`}</NormalText>
                  </Li>
                  <Li>
                    {getRefundElement(room.cancellationType)}
                  </Li>
                </Ul>
              </Cell>
              <Cell flexBasis={90} flexShrink={0} flexGrow={0}>
                <Select onChange={(event) => alert(event.target.value)}>
                  {options.map(((count) => <option key={count} value={count}>{count}</option>))}
                </Select>
              </Cell>
              <Cell flexBasis={90} flexShrink={0} flexGrow={0}>
                {typeIndex === 0 && index === 0 && (
                <StickyReserveButton stickAt={75}>
                  <Button appearance="primary">
                    {formatMessage({ id: 'hotelPage.reserve' })}
                  </Button>
                </StickyReserveButton>
                )}
              </Cell>
            </Row>
          ));
        })}
      </Table>
    </Wrapper>
  );
};
