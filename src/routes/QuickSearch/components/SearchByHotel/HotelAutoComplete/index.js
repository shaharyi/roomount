import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete'
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { getHotels } from '../../../../../services/search'


export const HotelAutoComplete = ({ onChange }) => {
  const [value, setValue] = useState("");
  const [hotels, setHotelNames] = useState([]);

  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const autoCompleteResults = useSelector(({ search }) => search.autoCompleteResults)
  console.log(autoCompleteResults);

  return (
    <Autocomplete
      inputProps={{
        id: 'states-autocomplete',
        style: { width: '100%' },
        placeholder: formatMessage({ id: 'search.getBestPrices' })
      }}
      wrapperStyle={{ width: '100%', position: 'relative', display: 'inline-block' }}
      value={value}
      items={hotels}
      getItemValue={(item) => item.name}
      onSelect={(value, item) => {
        setValue(value);
        // set the menu to only the selected item
        setHotelNames([item]);
        // or you could reset it to a default list again
        //setHotelNames(autoCompleteResults);
        onChange({ value: item.id });
      }}
      onChange={(event, value) => {
        setValue(value);
        dispatch(getHotels(value));
        setHotelNames(autoCompleteResults);
        //setHotelNames([{"name": "okok"}, {"name":"wow"}, {"name": "wowok"}]);
      }}
      renderMenu={children => (
        <div className="menu">
          {children}
        </div>
      )}
      renderItem={(item, isHighlighted) => (
        <div
          className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
          key={item.id.toString()}
        >{item.name}</div>
      )}
    />
  );
};

HotelAutoComplete.propTypes = {
  onChange: PropTypes.func.isRequired,
};