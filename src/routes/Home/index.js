import React, { useState } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { useDispatch } from 'react-redux';
import {
  SegmentedControl, Text,
} from 'evergreen-ui';
import { SearchByHotel } from './components/SearchByHotel';
import './reducer';
import { searchHotels } from './services';
import { MainWrapper, SearchWrapper } from './style';
import { HotelResults } from './components/HotelResults';

const SEARCH_OPTIONS = {
  HOTEL: 'HOTEL',
  LOCATION: 'LOCATION',
};

export const Home = () => {
  const [searchOption, setSearchOption] = useState(SEARCH_OPTIONS.HOTEL);

  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch(searchHotels({ a: 123 }));
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
      <HotelResults />
    </MainWrapper>
  );
};
