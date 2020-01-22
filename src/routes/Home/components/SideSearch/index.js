import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SegmentedControl, Heading,
} from 'evergreen-ui';
import { useHistory } from 'react-router-dom';
import { SearchByHotel } from '../SearchByHotel';
import { MapWrapper } from '../MapWrapper';
import { SearchFilters } from '../SearchFilters';
import { searchHotels } from '../../../../services/search';
import {
  SectionContainer,
} from './styles';

const SEARCH_OPTIONS = {
  HOTEL: 'HOTEL',
  LOCATION: 'LOCATION',
};

export const SideSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchOption, setSearchOption] = useState(SEARCH_OPTIONS.HOTEL);
  const onSearch = (searchTerms) => {
    dispatch(searchHotels(searchTerms, history));
  };
  const options = [
    { label: 'Specific Hotel', value: SEARCH_OPTIONS.HOTEL },
    { label: 'Location', value: SEARCH_OPTIONS.LOCATION },
  ];
  return (
    <div>
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
    </div>
  );
};
