import React from 'react';
import { Pane, Li } from 'evergreen-ui';
import { allFiltersObject } from '../../SearchFilters/filters';
import { List } from './styles';

export const Facilities = () => {
  console.log('>....');
  const { facilities: { options } } = allFiltersObject;
  console.log(options);
  const selectedFacilities = options.map(({ value }) => value);
  return (
    <Pane>
      <List>
        {selectedFacilities.map((facility) => (
          <Li key={facility}>
            {options.find((item) => item.value === facility).label}
          </Li>
        ))}
      </List>
    </Pane>
  );
};
