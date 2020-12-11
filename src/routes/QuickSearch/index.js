import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { useRouteMatch } from 'react-router-dom';
import { HotelResults } from './components/HotelResults';
import { HotelPage } from './components/HotelPage';
import { SideSearch } from './components/SideSearch';
import { getFullHotelInfo } from '../../services/search';
import {
  MainWrapper, SearchWrapper, ResultsWrapper,
} from './style';


export const QuickSearch = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { fullDetails } = useSelector((state) => state.search);
  const results = useSelector(({search}) => search.results);
  const isHotelView = !!match.params.hotelId;
  const differentIds = () => !fullDetails.info || fullDetails.info.id.toString() !== match.params.hotelId;
  if (isHotelView && !fullDetails.loading && differentIds()) {
    console.log('---------', fullDetails.loading, fullDetails.info, match.params.hotelId);
    dispatch(getFullHotelInfo(match.params.hotelId));
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
