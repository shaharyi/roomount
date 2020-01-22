import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Text, Button, Strong } from 'evergreen-ui';
import defaultImage from './defaultImage.png';
import {
  Wrapper, Img, InfoContainer, Title, TripAdvisor, Address,
  LowestCost, AllRoomsLink,
} from './styles';
import { StarsCount } from '../StarsCount';
import { OrderInfo } from './OrderInfo';

export const HotelItem = ({
  data,
}) => {
  const {
    id, name, image, stars, kmFromCenter, tripAdvisorScore, address, reviewCount, lowestPrice,
    orderInfo,
  } = data;
  const dispatch = useDispatch();
  const onShowOnMap = () => dispatch({ type: 'SHOW_ON_MAP', payload: data });
  // /hotelInfo/id
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
          <Button
            appearance="minimal"
            marginLeft={15}
            height={20}
            type="button"
            onClick={onShowOnMap}
          >
show on map
          </Button>
          <br />
          {`${kmFromCenter} km from center`}
        </Address>

        <OrderInfo {...orderInfo} />

        <LowestCost>
          <div>
            <Text size={300}>lowest available cost for your stay </Text>
            <Strong size={500}>{`$${lowestPrice}`}</Strong>
          </div>
          <AllRoomsLink to={`/hotelInfo/${id}`}>See all rooms and rates</AllRoomsLink>
        </LowestCost>

      </InfoContainer>
    </Wrapper>
  );
};

HotelItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
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
