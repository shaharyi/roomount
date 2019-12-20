import React, { useState } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { useSelector, useDispatch } from 'react-redux';
import { SearchByHotel } from './components/SearchByHotel';
import './reducer';
import { searchHotels } from './services';
import { MainWrapper, ResultsWrapper, SearchWrapper } from './style';
import { HotelItem } from './components/HotelItem';

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

  return (
    <MainWrapper>
      <SearchWrapper>
        Search by
        <div>
          <button
            disabled={searchOption === SEARCH_OPTIONS.HOTEL}
            type="button"
            onClick={() => setSearchOption(SEARCH_OPTIONS.HOTEL)}
          >
            Specific Hotel
          </button>
          <button
            disabled={searchOption === SEARCH_OPTIONS.LOCATION}
            type="button"
            onClick={() => setSearchOption(SEARCH_OPTIONS.LOCATION)}
          >
            Location
          </button>
        </div>
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
