import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import {
  Pane, Heading, Text, minorScale, Checkbox, Select, TextInputField, Paragraph, Label, Button,
} from 'evergreen-ui';
import { MOCK_INFO, MOCK_ROOMS } from './mock';
import {
  Container, SummeryItem, RoomContainer, PaymentForm, Splitter, CreditLabel,
} from './styles';

const theMonths = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const Reserve = () => {
  const { formatMessage } = useIntl();
  // const { reservation, search } = useSelector((state) => state);
  // const { info } = search.fullDetails;
  // const { rooms } = reservation;
  const info = MOCK_INFO;
  const searchrooms = MOCK_ROOMS;
  // summary
  const allRoomTypes = info.roomTypes.map(({ rooms, type }) => rooms.map((room) => ({ ...room, type }))).flat();
  const reserved = Object.keys(searchrooms)
    .map((roomId) => allRoomTypes
      .find((rType) => rType.id === roomId))
    .map((room) => ({ ...room, amount: searchrooms[room.id] }));
  console.log(reserved);

  const summery = {
    reservationNumber: '10',
    startDate: '30/02/2010',
    endDate: '12/03/2010',
    totalStayPrice: reserved
      .reduce((acc, { pricePerNight, amount }) => acc + (pricePerNight * amount), 0),
  };

  const getSummaryLine = (message, value) => (
    <SummeryItem size={600}>
      {formatMessage({ id: message })}
      <Text size={600} marginLeft={minorScale(2)}>{value}</Text>
    </SummeryItem>
  );
  const getRoomLine = (message, value) => (
    <SummeryItem size={400}>
      {formatMessage({ id: message })}
      <Text size={400} marginLeft={minorScale(2)}>{value}</Text>
    </SummeryItem>
  );

  const renderReserved = (room) => (
    <RoomContainer key={room.id} marginTop={minorScale(2)}>
      {getRoomLine('reservation.roomNumber', Math.floor(Math.random() * 100))}
      {getRoomLine('reservation.roomType', room.type)}
      {getRoomLine('reservation.roomPrice', room.amount * room.pricePerNight)}
      {getRoomLine('reservation.numberOfRooms', room.amount)}
      {getRoomLine('reservation.breakfastIncluded', room.breakfastPrice === 0 ? 'yes' : 'no')}
      {getRoomLine('reservation.cancelAllowed', room.cancellationType === 'free' ? 'yes' : 'no')}
    </RoomContainer>
  );
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Container>
      <Splitter>
        <Pane>
          <Heading size={800} marginTop={minorScale(4)}>
            {formatMessage({ id: 'reservation.title' })}
          </Heading>
          <Pane marginTop={minorScale(4)}>
            {getSummaryLine('reservation.reservationNumber', summery.reservationNumber)}
            {getSummaryLine('reservation.checkIn', summery.startDate)}
            {getSummaryLine('reservation.checkOut', summery.endDate)}
            {getSummaryLine('reservation.totalStayPrice', summery.totalStayPrice)}
          </Pane>
          <Pane marginTop={minorScale(4)}>
            <Heading size={800}>{formatMessage({ id: 'reservation.orderDetails' })}</Heading>
            {reserved.map(renderReserved)}
          </Pane>
        </Pane>
        <Pane marginLeft="auto">
          <Heading size={800} marginTop={minorScale(4)}>
          Payment Details
          </Heading>
          <PaymentForm onSubmit={onSubmit}>
            <TextInputField label="Owner" />
            <TextInputField label="phone" />

            <TextInputField label="card number" gridColumn="span 2" />
            <Pane display="flex">
              <Pane>
                <CreditLabel>month</CreditLabel>
                <Select>
                  {theMonths.map((month, index) => <option key={`${index}m`} value={index + 1}>{month}</option>)}
                </Select>
              </Pane>
              <Pane marginLeft={15}>
                <CreditLabel>year</CreditLabel>
                <Select>
                  {(new Array(30)).fill(0).map((n, index) => <option key={`${index}m`} value={index}>{2021 + index}</option>)}
                </Select>
              </Pane>
            </Pane>
            <Pane>
              <Label>Card Type</Label>
              <Select className="form-control" id="card_type" name="card_type">
                <option value="Visa">Visa</option>
                <option value="American Express">American Express</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Diners Club">Diners Club</option>
                <option value="Discover">Discover</option>
              </Select>
            </Pane>
            <Pane gridColumn="span 2" marginTop={minorScale(4)}>
              <Button appearance="primary" intent="success">Submit</Button>
            </Pane>
          </PaymentForm>
        </Pane>
      </Splitter>
    </Container>
  );
};
