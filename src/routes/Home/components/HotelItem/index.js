import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, Strong } from 'evergreen-ui';
import defaultImage from './defaultImage.png';
import {
  Wrapper, Img, InfoContainer, Title, TripAdvisor, Address,
  LowestCost, AllRoomsLink,
} from './styles';
import { StarsCount } from './StarsCount';
import { OrderInfo } from './OrderInfo';

export const HotelItem = ({
  data: {
    name, image, stars, kmFromCenter, tripAdvisorScore, address, reviewCount, lowestPrice,
    orderInfo,
  },
}) => {
  const seeAllRoomRates = () => {
    console.log(name);
  };
  return (
    <Wrapper>
      <Img src={image || defaultImage} alt="hotel_thumb" />
      <InfoContainer>
        <Title>
          {name}
          <StarsCount stars={stars} starSize={15} />
        </Title>
        <TripAdvisor>
          <Text>{`${tripAdvisorScore}`}</Text>
          <Text>{`${reviewCount || 'No'} reviews`}</Text>
        </TripAdvisor>
        <Address>
          {address}
          <Button appearance="minimal" marginLeft={15} height={20} type="button" onClick={() => console.log(address)}>show on map</Button>
          <br />
          {`${kmFromCenter} km from center`}
        </Address>

        <OrderInfo {...orderInfo} />

        <LowestCost>
          <div>
            <Text size={300}>lowest available cost for your stay </Text>
            <Strong size={500}>{`$${lowestPrice}`}</Strong>
          </div>
          <AllRoomsLink onClick={seeAllRoomRates}>See all rooms and rates</AllRoomsLink>
        </LowestCost>

      </InfoContainer>
    </Wrapper>
  );
};

HotelItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    stars: PropTypes.number,
    kmFromCenter: PropTypes.any,
    lowestPrice: PropTypes.number,
    tripAdvisorScore: PropTypes.number,
    address: PropTypes.string,
    reviewCount: PropTypes.number,
    orderInfo: PropTypes.shape({
      nights: PropTypes.number,
      adults: PropTypes.number,
      children: PropTypes.number,
    }),
  }).isRequired,
};
