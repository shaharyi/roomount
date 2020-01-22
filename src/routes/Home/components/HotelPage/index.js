import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
  Pane, Spinner, Link, Text, Paragraph, Heading, Button, minorScale,
} from 'evergreen-ui';
import { StarsCount } from '../StarsCount';
import { HotelInfo, HotelInfoList } from './styles';

export const HotelPage = () => {
  const { info, loading } = useSelector((state) => state.search.fullDetails);
  const roomsRef = useRef();
  const facilitiesRef = useRef();
  const rulesRef = useRef();

  const getScrollTo = (ref) => () => window.scrollTo({
    behavior: 'smooth',
    top: ref.current.offsetTop - 100,
  });

  const dispatch = useDispatch();
  const onShowOnMapClicked = () => dispatch({ type: 'SHOW_ON_MAP', payload: info });
  return (
    <div>
      {loading ? <Spinner /> : (
        <Pane id="hotel-info">
          <Pane>
            <Text onClick={getScrollTo(roomsRef)}>Rooms & Prices</Text>
            <Text onClick={getScrollTo(facilitiesRef)}>Facilities & Services</Text>
            <Text onClick={getScrollTo(rulesRef)}>Rules & Policies</Text>
          </Pane>

          <HotelInfo>
            <Pane>
              <Heading size={800}>
                {info.name}
                <StarsCount stars={info.stars} />
              </Heading>
              <Paragraph>
                {info.address}
                <Button appearance="minimal" onClick={onShowOnMapClicked}>Show on map</Button>
              </Paragraph>
              <Paragraph>{`${info.kmFromCenter} km from center`}</Paragraph>
            </Pane>
            <Pane>
              <Button appearance="primary">Reserve</Button>
            </Pane>
            <HotelInfoList>
              <Text color="muted">Free breakfast available</Text>
              <Text>Breakfast available</Text>
              <Text>Free cancellation available</Text>
              <Text>Free WiFI</Text>
            </HotelInfoList>
          </HotelInfo>

          <Pane>
            <Carousel infiniteLoop useKeyboardArrows>
              {info.gallery.map((image, index) => (
                <div key={image}>
                  <img src={image} alt={`Image_${index}`} />
                </div>
              ))}

            </Carousel>
          </Pane>
          <Pane>
            <Heading marginBottom={minorScale(3)}>Description</Heading>
            <Paragraph marginBottom={minorScale(3)}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ullamcorper lacus. Suspendisse vulputate lectus sollicitudin elit egestas, nec tempus justo maximus. Aenean eget facilisis sapien. Pellentesque sit amet eros tincidunt, consequat turpis et, pharetra ante. Aliquam lacus nunc, maximus vel tempor eget, placerat at felis. Nulla vulputate, nunc at fringilla fermentum, ante nisi tincidunt ante, at placerat magna nibh quis tortor. Ut mattis diam eget ante efficitur vestibulum.
            </Paragraph>
            <Paragraph marginBottom={minorScale(3)}>
Praesent sagittis orci a elit eleifend sollicitudin imperdiet ut orci. Duis faucibus ex sed dolor sagittis mollis. Maecenas ante leo, tincidunt id tempor accumsan, bibendum in erat. Maecenas ornare mi id tortor feugiat ultricies. Vestibulum convallis in massa sit amet tincidunt. In varius nulla quis odio laoreet, eget facilisis justo vehicula. Phasellus felis lacus, eleifend eget fermentum id, pellentesque feugiat arcu. Cras condimentum placerat massa id ultrices. Cras est nunc, ornare eu accumsan vitae, mattis eget lacus. Integer interdum aliquam purus, in malesuada urna tincidunt non. Aliquam tempor justo ante, a ultrices metus ultricies et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec porta est in justo finibus bibendum.
            </Paragraph>
          </Pane>
          <Pane innerRef={roomsRef}>
					Rooms & Prices section (for paging)
            {/* Room Type	Max adults		Price for N nights		Rate details		rooms */}
          </Pane>
          <Pane innerRef={facilitiesRef}>
					Facilities & Services section (for paging)
          </Pane>
          <Pane innerRef={rulesRef}>
					Rules & Policies Section (for paging)
            {/* Check in
								Check out
								Children and extra beds
								Pets
								Accepted cards
							*/}
          </Pane>
        </Pane>
      )}
    </div>
  );
};
