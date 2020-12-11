import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import {
  Spinner, Heading, Pane,
} from 'evergreen-ui';
import { HotelItem } from '../HotelItem';
import {
  LoaderWrapper, FilterContainer, FilterItem, SortIcon, FilterItemText,
} from './styles';

const SORTING = {
  TIME: 'time',
  PRICE: 'price',
  REVIEW: 'review',
  DISTANCE: 'distance',
  STARS: 'stars',
};

const getSortFunction = (sortBy, isAsc) => {
  switch (sortBy) {
    case SORTING.TIME: return isAsc
      ? (itemA, itemB) => itemA.lowestPrice - itemB.lowestPrice
      : (itemA, itemB) => itemB.lowestPrice - itemA.lowestPrice;
    case SORTING.PRICE: return isAsc
      ? (itemA, itemB) => itemA.lowestPrice - itemB.lowestPrice
      : (itemA, itemB) => itemB.lowestPrice - itemA.lowestPrice;
    case SORTING.REVIEW: return isAsc
      ? (itemA, itemB) => itemA.tripAdvisorScore - itemB.tripAdvisorScore
      : (itemA, itemB) => itemB.tripAdvisorScore - itemA.tripAdvisorScore;
    case SORTING.DISTANCE: return isAsc
      ? (itemA, itemB) => itemA.kmFromCenter - itemB.kmFromCenter
      : (itemA, itemB) => itemB.kmFromCenter - itemA.kmFromCenter;
    case SORTING.STARS: return isAsc
      ? (itemA, itemB) => itemA.stars - itemB.stars
      : (itemA, itemB) => itemB.stars - itemA.stars;
    default: throw new Error('missing enum', sortBy);
  }
};

export const HotelResults = () => {
  const { formatMessage } = useIntl();
  const results = useSelector(({search}) => search.results);
  console.log("RESULTS:");
  console.log(results);;
  const isLoading = useSelector(({search}) => search.isLoading);
  const [sortBy, setSortBy] = useState('time');
  const [asc, setAsc] = useState(true);
  const options = [
    { label: formatMessage({ id: 'results.sort_time' }), value: SORTING.TIME },
    { label: formatMessage({ id: 'results.sort_price' }), value: SORTING.PRICE },
    { label: formatMessage({ id: 'results.sort_review' }), value: SORTING.REVIEW },
    { label: formatMessage({ id: 'results.sort_distance' }), value: SORTING.DISTANCE },
    { label: formatMessage({ id: 'results.sort_stars' }), value: SORTING.STARS },
  ];

  return (
    <div>
      <FilterContainer>
        <Heading>
          {formatMessage({ id: 'results.sortBy' })}
        </Heading>
        <Pane>
          {options.map(({ label, value }) => {
            const selected = sortBy === value;
            const onItemSelected = () => {
              if (value !== sortBy) {
                setAsc(true);
              } else {
                setAsc(!asc);
              }

              setSortBy(value);
            };
            return (
              <FilterItem key={value} selected={selected} onClick={onItemSelected}>
                <FilterItemText>{label}</FilterItemText>
                <SortIcon icon={asc ? 'caret-down' : 'caret-up'} />
              </FilterItem>
            );
          })}
        </Pane>
      </FilterContainer>
      {isLoading
        ? <LoaderWrapper><Spinner /></LoaderWrapper>
        : results.sort(getSortFunction(sortBy, asc))
          .map((result) => <HotelItem key={result.id} data={result} />)}
    </div>
  );
};
