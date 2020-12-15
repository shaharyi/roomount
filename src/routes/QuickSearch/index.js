import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { useRouteMatch } from 'react-router-dom';
import { HotelResults } from './components/HotelResults';
import { HotelPage } from './components/HotelPage';
import { SideSearch } from './components/SideSearch';
import { getHotelInfo, quickSearch, searchHotels } from '../../services/search';
import {
  MainWrapper, SearchWrapper, ResultsWrapper,
} from './style';


export const QuickSearch = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { searchDetails, fullDetails } = useSelector((state) => state.search);
  const isHotelView = !!match.params.hotelId;
  //const isHotelView = !!fullDetails;
  const differentIds = () => !fullDetails.hotel_info || fullDetails.hotel_info.id.toString() !== match.params.hotelId;
  if (isHotelView) {
    if (!fullDetails.loading && differentIds()) {
      console.log('---------', fullDetails.loading, fullDetails.hotel_info, match.params.hotelId);
      dispatch(getHotelInfo(match.params.hotelId));
    }
    if (!fullDetails.offers && searchDetails && searchDetails.startDate && searchHotels.endDate)
      dispatch(quickSearch(searchDetails));
  }
  // console.log('ISHOTEL VIEW', fullDetails, match.params);
  return (
    <MainWrapper>
      <SearchWrapper>
        <SideSearch />
      </SearchWrapper>
      <ResultsWrapper>
        {isHotelView
          ? <HotelPage />
          : <HotelResults /> }
      </ResultsWrapper>
    </MainWrapper>
  );
};
