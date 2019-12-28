import React from 'react';
import PropTypes from 'prop-types';
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
}) => (
  <Wrapper>
    <Img src={image || defaultImage} alt="hotel_thumb" />
    <InfoContainer>
      <Title>
        <span>
          {name}
        </span>
        <StarsCount stars={stars} starSize={15} />
      </Title>
      <TripAdvisor>
        <span>{`${tripAdvisorScore}`}</span>
        <span>{`${reviewCount || 'No'} reviews`}</span>
      </TripAdvisor>
      <Address>
        {address}
        <button type="button" onClick={() => console.log(address)}>show on map</button>
        <br />
        {`${kmFromCenter} km from center`}
      </Address>

      <OrderInfo {...orderInfo} />

      <LowestCost>
        <div>
          lowest available cost for your stay
            $
          {lowestPrice}
        </div>
        <AllRoomsLink>See all rooms and rates</AllRoomsLink>
      </LowestCost>

    </InfoContainer>
  </Wrapper>
);

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
