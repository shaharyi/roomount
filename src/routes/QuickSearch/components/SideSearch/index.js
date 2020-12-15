import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import {
  SegmentedControl, Heading,
} from 'evergreen-ui';
import { useHistory } from 'react-router-dom';
import { SearchByHotel } from '../SearchByHotel';
import { SearchByLocation } from '../SearchByLocation';
import { MapWrapper } from '../MapWrapper';
import { SearchFilters } from '../SearchFilters';
import { searchHotels, getFullHotelData } from '../../../../services/search';
import {
  SectionContainer,
} from './styles';

const SEARCH_OPTIONS = {
  HOTEL: 'HOTEL',
  LOCATION: 'LOCATION',
};

export const SideSearch = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchOption, setSearchOption] = useState(SEARCH_OPTIONS.HOTEL);
  const onSearchByHotel = (searchTerms) => {
      dispatch(getFullHotelData(searchTerms, history));
  }
  const onSearchByLocation = (searchTerms) => {
      dispatch(searchHotels(searchTerms));    
  };
  const options = [
    { label: formatMessage({ id: 'search.specific' }), value: SEARCH_OPTIONS.HOTEL },
    { label: formatMessage({ id: 'search.location' }), value: SEARCH_OPTIONS.LOCATION },
  ];
  return (
    <div>
      <SectionContainer>
        <Heading>{formatMessage({ id: 'search.searchBy' })}</Heading>
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
          ? <SearchByHotel onSearch={onSearchByHotel} />
          : <SearchByLocation onSearch={onSearchByLocation} />}
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
