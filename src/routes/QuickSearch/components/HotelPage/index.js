/* eslint-disable max-len */
/* eslint-disable no-tabs */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
  Pane, Spinner, Text, Paragraph, Heading, Button, minorScale,
} from 'evergreen-ui';
import { StarsCount } from '../StarsCount';
import { HotelInfo, HotelInfoList, SectionWrapper } from './styles';
import { RoomsTable } from './RoomsTable';
import { Facilities } from './Facilities';
import { RulesAndPolicies } from './RulesAndPolicies';

export const HotelPage = () => {
  const { formatMessage } = useIntl();
  const { loading, nights, hotel_info, offers } = useSelector((state) => state.search.fullDetails);
  const roomsRef = useRef();
  const facilitiesRef = useRef();
  const rulesRef = useRef();

  const getScrollTo = (ref) => () => window.scrollTo({
    behavior: 'smooth',
    top: ref.current.offsetTop - 100,
  });

  const dispatch = useDispatch();

  const onShowOnMapClicked = () => dispatch({ type: 'SHOW_ON_MAP', payload: hotel_info });

  return (
    <div>
      {loading ? <Spinner /> : (
        <Pane id="hotel-info">
          <Pane>
            <Text onClick={getScrollTo(roomsRef)}>
              {formatMessage({ id: 'hotelPage.roomsAndPrices' })}
            </Text>
            <Text onClick={getScrollTo(facilitiesRef)}>
              {formatMessage({ id: 'hotelPage.facilitiesAndServices' })}
            </Text>
            <Text onClick={getScrollTo(rulesRef)}>
              {formatMessage({ id: 'hotelPage.rulesAndPolicies' })}
            </Text>
          </Pane>

          <HotelInfo>
            <Pane>
              <Heading size={800}>
                {hotel_info.name}
                <StarsCount stars={hotel_info.stars} />
              </Heading>
              <Paragraph>
                {hotel_info.address}
                <Button appearance="minimal" onClick={onShowOnMapClicked}>{formatMessage({ id: 'hotel.showOnMap' })}</Button>
              </Paragraph>
              <Paragraph>{formatMessage({ id: 'hotel.kmFromCenter' }, { kmFromCenter: hotel_info.kmFromCenter })}</Paragraph>
            </Pane>
            <Pane>
              <Button appearance="primary">{formatMessage({ id: 'hotelPage.reserve' })}</Button>
            </Pane>
            <HotelInfoList>
              <Text color="muted">{formatMessage({ id: 'hotelPage.freeBreakfastAvailable' })}</Text>
              <Text>{formatMessage({ id: 'hotelPage.breakfastAvailable' })}</Text>
              <Text>{formatMessage({ id: 'hotelPage.freeCancellation' })}</Text>
              <Text>{formatMessage({ id: 'hotelPage.freeWifi' })}</Text>
            </HotelInfoList>
          </HotelInfo>

          <Pane>
            <Carousel infiniteLoop useKeyboardArrows>
              {hotel_info.gallery.map((image, index) => (
                <div key={image}>
                  <img src={image} alt={`Image_${index}`} />
                </div>
              ))}

            </Carousel>
          </Pane>
          <Pane>
            <Heading marginBottom={minorScale(3)}>{formatMessage({ id: 'hotelPage.description' })}</Heading>
            <Paragraph marginBottom={minorScale(3)}>
              {hotel_info.description}
            </Paragraph>
          </Pane>
          {offers &&
            <div ref={roomsRef}>
              <SectionWrapper>
                <RoomsTable />
              </SectionWrapper>
            </div>
          }
          <div ref={facilitiesRef}>
            <SectionWrapper>
              {formatMessage({ id: 'hotelPage.facilitiesAndServices' })}
              <Facilities />
            </SectionWrapper>
          </div>
          <div ref={rulesRef}>
            <SectionWrapper>
              {formatMessage({ id: 'hotelPage.rulesAndPolicies' })}
              <RulesAndPolicies />
            </SectionWrapper>
          </div>
        </Pane>
      )}
    </div>
  );
};
