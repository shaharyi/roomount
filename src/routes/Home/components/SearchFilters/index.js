import React, { useState } from 'react';
import { Pane, Heading } from 'evergreen-ui';
import { filtersState, allFiltersObject } from './filters';
import { FilterCheckBox } from './styled';


export const SearchFilters = () => {
  const [filters, setFilters] = useState(filtersState);
  return (
    <Pane>
      <Heading>Filters</Heading>

      {Object.keys(allFiltersObject).map((groupName) => {
        const group = allFiltersObject[groupName];
        return (
          <Pane key={groupName}>
            <Heading size={300}>{group.label}</Heading>
            {group.options.map(({ value, label }) => (
              <FilterCheckBox
                isHalf={group.isHalf}
                label={label}
                checked={filters[value]}
                onChange={(e) => {
                  filters[value] = e.target.checked;
                  console.log('changed', value, filters[value]);
                  setFilters({ ...filters });
                }}
              />
            ))}
          </Pane>
        );
      })}
    </Pane>
  );
};
