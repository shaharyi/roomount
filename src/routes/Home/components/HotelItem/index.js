import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.png';
import {
  Wrapper, Img, InfoContainer, Title, TopContainer, TripAdvisor, Address,
} from './styles';
import { StarsCount } from './StarsCount';

export const HotelItem = ({
  data: {
    name, image, stars, kmFromCenter, tripAdvisorScore, address, reviewCount,
  },
}) => (
  <Wrapper>
    <Img src={image || defaultImage} alt="hotel_thumb" />
    <InfoContainer>
      <TopContainer>
        <Title>
          <span>
            {name}
          </span>
          <StarsCount stars={stars} />
        </Title>
        <TripAdvisor>
          <span>{`${tripAdvisorScore}`}</span>
          <span>{`${reviewCount || 'No'} reviews`}</span>
        </TripAdvisor>
        <Address>
          <p>
            {address}
            <button type="button" onClick={() => console.log(address)}>show on map</button>
          </p>
        </Address>

      </TopContainer>
      <p>
        {`${kmFromCenter} km from center`}
      </p>

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
  }).isRequired,
};
