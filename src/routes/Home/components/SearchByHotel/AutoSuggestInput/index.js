import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

const languages = [
  'Coooo1',
  'Coooo2',
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return languages.filter((lang) => lang.toLowerCase().slice(0, inputLength) === inputValue);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => (
  <div>
    {suggestion}
  </div>
);

export const AutosuggestInput = ({ onChange }) => {
  // const { value, suggestions } = this.state;
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const onChangeInner = (event, { newValue }) => {
    setValue(newValue);
    onChange({ value: newValue, valid: suggestions.includes(newValue) });
    // console.log('....', newValue);
  };
  const onSuggestionsFetchRequested = ({ value: newVal }) => {
    if (newVal.length < 3 && suggestions.length > 0) {
      setSuggestions([]);
    } else {
      setTimeout(() => {
        setSuggestions(getSuggestions(newVal));
      }, 2000);
    }
  };

  useEffect(() => {}, [suggestions]);

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'Type a programming language',
    value,
    onChange: onChangeInner,
  };

  // Finally, render it!
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

AutosuggestInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
