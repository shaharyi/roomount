import React, { useState } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { useDispatch } from 'react-redux';
import {
  SegmentedControl, Heading,
} from 'evergreen-ui';

import { SearchByHotel } from './components/SearchByHotel';
import { searchHotels } from '../../services/search';
import { HotelResults } from './components/HotelResults';
import { MapWrapper } from './components/MapWrapper';
import {
  MainWrapper, SearchWrapper, ResultsWrapper, SectionContainer,
} from './style';
import { SearchFilters } from './components/SearchFilters';

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
        <SectionContainer>
          <Heading>Search by</Heading>
        </SectionContainer>
        <SectionContainer>
          <SegmentedControl
            options={options}
            value={searchOption}
            onChange={(newState) => setSearchOption(newState)}
          />
        </SectionContainer>
        <SectionContainer>
          {searchOption === SEARCH_OPTIONS.HOTEL
            ? <SearchByHotel onSearch={onSearch} />
            : <div>location</div>}
        </SectionContainer>
        <SectionContainer>
          <MapWrapper />
        </SectionContainer>
        <SectionContainer>
          <SearchFilters />
        </SectionContainer>
      </SearchWrapper>
      <ResultsWrapper>
        <HotelResults />
      </ResultsWrapper>
    </MainWrapper>
  );
};
