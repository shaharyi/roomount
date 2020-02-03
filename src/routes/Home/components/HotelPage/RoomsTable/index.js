import React from 'react';
import { useSelector } from 'react-redux';
import {
  Heading, Button, Ul, Li,
} from 'evergreen-ui';
import {
  Wrapper, Table, TableHeader, Row, Cell, NormalText,
} from './styles';

export const RoomsTable = () => {
  const { info, nights } = useSelector((state) => state.search.fullDetails);
  const { roomTypes } = info;

  const getRefundElement = (type) => {
    switch (type) {
      case 'free': return <NormalText>No prepayment. Pay when you stay!</NormalText>;
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
                <Button appearance="primary">Reserve</Button>
              </Cell>
            </Row>
          ));
        })}
      </Table>
    </Wrapper>
  );
};
