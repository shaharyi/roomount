import React from 'react';
import {
  Text, Paragraph, Heading, Button, minorScale, Ul, Li,
} from 'evergreen-ui';
import {
  Wrapper, Table, TableHeader, Row, Cell, NormalText,
} from './styles';

export const RoomsTable = () => {
  const roomTypes = [{
    type: 'Double room',
    rooms: [
      {
        id: '1',
        maxAdults: 2,
        pricePerNight: 150,
        breakfastPrice: 0,
        cancellationType: 'free',
      }, {
        id: '2',
        maxAdults: 2,
        pricePerNight: 150,
        breakfastPrice: 30,
        cancellationType: 'partial',
      }, {
        id: '3',
        maxAdults: 2,
        pricePerNight: 150,
        breakfastPrice: 30,
        cancellationType: 'none',
      },
    ],
  }, {
    type: 'Triple room',
    rooms: [
      {
        id: '4',
        maxAdults: 2,
        pricePerNight: 150,
        breakfastPrice: 0,
        cancellationType: 'free',
      },
    ],
  }];
  const nights = 3;

  const getRefundElement = (type) => {
    switch (type) {
      case 'free': return 'No prepayment. Pay when you stay!';
      case 'partial': return (
        <NormalText className="tooltip-base" size={200}>
          <NormalText>Partially refundable</NormalText>
          <NormalText className="tooltip" size={200}>first night cost will be charged in case you cancel this reservation</NormalText>
        </NormalText>
      );
      default: return 'Non Refundable';
    }
  };
  return (
    <Wrapper>
      <Heading>Rooms & Prices section</Heading>
      <Table>
        <TableHeader>
          <Cell><NormalText>Room Type</NormalText></Cell>
          <Cell><NormalText>Max Adults</NormalText></Cell>
          <Cell><NormalText>{`Price for ${nights} nights`}</NormalText></Cell>
          <Cell><NormalText>Rate details</NormalText></Cell>
          <Cell><NormalText>Rooms</NormalText></Cell>
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
                    {room.breakfastPrice === 0
                      ? 'Breakfast Included !'
                      : `Breakfast available at total cost of $${room.breakfastPrice}`}
                  </Li>
                  <Li>
                    {`Free cancellation before midnight of ${Date.now()}`}
                  </Li>
                  <Li>
                    {getRefundElement(room.cancellationType)}
                  </Li>
                </Ul>
              </Cell>
              <Cell flexBasis={90} flexShrink={0} flexGrow={0}>
                <Button appearance="primary">Reserve</Button>
              </Cell>
            </Row>
          ));
        })}
      </Table>
    </Wrapper>
  );
};
