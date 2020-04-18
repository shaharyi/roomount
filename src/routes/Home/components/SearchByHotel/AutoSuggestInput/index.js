import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Autocomplete, TextInput } from 'evergreen-ui';
import { useIntl } from 'react-intl';
// import { getHotels } from '../../../../../services/search';


const hotelNames = [
  'Coooo1',
  'Coooo2',
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return hotelNames.filter((lang) => lang.toLowerCase().slice(0, inputLength) === inputValue);
};

export const AutosuggestInput = ({ onChange }) => {
  // const dispatch = useDispatch();
  // const autoCompleteResults = useSelector(({ search }) => search.autoCompleteResults);
  const { formatMessage } = useIntl();
  // console.log(autoCompleteResults);
  const [suggestions, setSuggestions] = useState([]);
  // dispatch(getHotels('Inn'));
  const onChangeInner = (newValue) => {
    onChange({ value: newValue, valid: suggestions.includes(newValue) });
    if (suggestions.length === 0 && newValue.length >= 2) {
    // dispatch(getHotels(newValue));
      setTimeout(() => {
        setSuggestions(getSuggestions(newValue));
      }, 500);
    }
  };

  return (
    <Autocomplete
      flex="1"
      onChange={(changedItem) => console.log(changedItem)}
      items={suggestions}
    >
      {({ getInputProps, getRef, inputValue }) => {
        onChangeInner(inputValue);

        return (
          <TextInput
            width="100%"
            placeholder={formatMessage({ id: 'search.getBestPrices' })}
            value={inputValue}
            innerRef={getRef}

            {...getInputProps()}
          />
        );
      }}
    </Autocomplete>
  );
};

AutosuggestInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
