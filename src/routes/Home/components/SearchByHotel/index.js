import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import PropTypes from 'prop-types';
import {
  Button, Paragraph, minorScale,
} from 'evergreen-ui';
import { AutosuggestInput } from './AutoSuggestInput';
import { DateRangePickerWrapper } from './styles';

export const SearchByHotel = ({ onSearch }) => {
  const [searchString, setSearchString] = useState('');
  const [startDateState, setStartDate] = useState(null);
  const [endDateState, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const isFormValid = () => startDateState != null
  && endDateState != null
  && startDateState < endDateState
  && !!searchString;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', startDateState != null, endDateState != null, startDateState < endDateState, !!searchString);

    if (isFormValid()) {
      onSearch({ startDateState, endDateState, searchString });
    }
  };
  const onAutoSuggestChange = ({ value, valid }) => {
    setSearchString(valid ? value : '');
  };
  const getNightsStayTest = () => {
    const nights = endDateState.diff(startDateState, 'days');
    const nightsText = nights === 1 ? 'night' : 'nights';
    return `${nights}-${nightsText} stay`;
  };

  return (
    <form id="search_hotels" onSubmit={handleSubmit}>
      <AutosuggestInput onChange={onAutoSuggestChange} />
      <DateRangePickerWrapper marginBottom={minorScale(2)}>
        <DateRangePicker
          showDefaultInputIcon
          startDate={startDateState} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDateState} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInputString) => setFocusedInput(focusedInputString)}
        />
        {startDateState && endDateState && (
          <Paragraph>
            {getNightsStayTest()}
          </Paragraph>
        ) }
      </DateRangePickerWrapper>

      <Button type="submit" form="search_hotels" value="Submit" appearance="primary">
Get best prices
      </Button>

    </form>
  );
};
SearchByHotel.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
