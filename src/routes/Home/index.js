import React, { useState } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { useSelector, useDispatch } from 'react-redux';
import { SearchByHotel } from './components/SearchByHotel';
import './reducer';
import { searchHotels } from './services';
import { MainWrapper, ResultsWrapper, SearchWrapper } from './style';
import { HotelItem } from './components/HotelItem';
import {
  SegmentedControl, Text,
} from 'evergreen-ui';

const SEARCH_OPTIONS = {
  HOTEL: 'HOTEL',
  LOCATION: 'LOCATION',
};

export const Home = () => {
  const [searchOption, setSearchOption] = useState(SEARCH_OPTIONS.HOTEL);

  const { results, isLoading } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch({ type: 'GET_RESULTS' });
    searchHotels({ a: 123 })
      .then((hotels) => {
        dispatch({ type: 'SET_RESULTS', results: hotels });
      });
  };
  const options = [
    { label: 'Specific Hotel', value: SEARCH_OPTIONS.HOTEL },
    { label: 'Location', value: SEARCH_OPTIONS.LOCATION },
  ];

  return (
    <MainWrapper>
      <SearchWrapper>
        <Text>Search by</Text>
        <SegmentedControl
          width={240}
          options={options}
          value={searchOption}
          onChange={(newState) => setSearchOption(newState)}
        />

        {searchOption === SEARCH_OPTIONS.HOTEL
          ? <SearchByHotel onSearch={onSearch} />
          : <div>location</div>}
      </SearchWrapper>
      {/* results */}
      <ResultsWrapper>
        {isLoading && 'LOADING'}
        {!!results && results.map((result) => <HotelItem key={result.id} data={result} />)}
      </ResultsWrapper>
    </MainWrapper>
  );
};
