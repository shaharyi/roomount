import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { AutosuggestInput } from './AutoSuggestInput';
// TODO: http://react-autosuggest.js.org/ add auto complete from here

export const SearchByHotel = () => {
  const [searchString, setSearchString] = useState('');
  const [startDateState, setStartDate] = useState(null);
  const [endDateState, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  // const onInputChange = ({ target: { value } }) => {
  //   setSearchString(value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', startDateState != null, endDateState != null, startDateState < endDateState, !!searchString);
  };
  const onAutoSuggestChange = ({ value, valid }) => {
    console.log(value, valid);
    setSearchString(valid ? value : '');
  };

  return (
    <form id="form1" onSubmit={handleSubmit}>
      <AutosuggestInput onChange={onAutoSuggestChange} />
      {/* <input onChange={onInputChange} value={searchString} /> */}
      <DateRangePicker
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
      <button type="submit" form="form1" value="Submit">
Get best prices
      </button>

    </form>
  );
};
