import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Pane, Heading, Checkbox } from 'evergreen-ui';
import { filtersState, allFiltersObject } from './filters';


export const SearchFilters = () => {
  const { formatMessage } = useIntl();
  const [filters, setFilters] = useState(filtersState);
  return (
    <Pane>
      <Heading>{formatMessage({ id: 'filters.title' })}</Heading>

      {Object.keys(allFiltersObject).map((groupName) => {
        const group = allFiltersObject[groupName];
        const intlBase = `filters.${groupName}`;
        const additionalParam = group.isHalf ? {
          display: 'inline-flex',
          width: '50%',
        } : {};
        return (
          <Pane key={groupName}>
            <Heading size={300}>
              {formatMessage({ id: `${intlBase}.title` })}
            </Heading>
            {group.options.map(({ value }) => (
              <Checkbox
                key={value}
                {...additionalParam}
                label={formatMessage({ id: `${intlBase}.${value}` })}
                checked={filters[value]}
                onChange={(e) => {
                  filters[value] = e.target.checked;
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
