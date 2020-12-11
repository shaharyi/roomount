import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { useIntl } from 'react-intl';
import { Button, Paragraph, minorScale } from 'evergreen-ui';

import { DateRangePickerWrapper, HotelAutoCompleteWrapper } from './styles';
import { HotelAutoComplete } from './HotelAutoComplete';


export const SearchByHotel = ({ onSearch }) => {
  const { formatMessage } = useIntl();
  const [searchString, setSearchString] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const isFormValid = () => startDate != null && endDate != null && startDate < endDate && !!searchString;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', startDate != null, endDate != null, startDate < endDate, !!searchString);

    const startISO = startDate.format('YYYY-MM-DD');
    const endISO = endDate.format('YYYY-MM-DD');
    if (isFormValid()) {
      onSearch({ startISO, endISO, searchString });
    }
  };
  const onAutoSuggestChange = ({ value, valid }) => {
    setSearchString(valid ? value : '');
  };
  const getNightsStay = () => {
    const nights = endDate.diff(startDate, 'days');
    return formatMessage({ id: 'search.nightsStay' }, { nights });
  };

  return (
    <form id="search_hotels" onSubmit={handleSubmit}>
      <HotelAutoCompleteWrapper>
        <HotelAutoComplete onChange={onAutoSuggestChange} />
      </HotelAutoCompleteWrapper>
      <DateRangePickerWrapper marginBottom={minorScale(2)}>
        <DateRangePicker
          showDefaultInputIcon
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInputString) => setFocusedInput(focusedInputString)}
        />
        {startDate && endDate && (
          <Paragraph>
            {getNightsStay()}
          </Paragraph>
        )}
      </DateRangePickerWrapper>

      <Button type="submit" form="search_hotels" value="Submit" appearance="primary">
        {formatMessage({ id: 'search.getBestPrices' })}
      </Button>

    </form>
  );
};
SearchByHotel.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
