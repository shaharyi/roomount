/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import 'react-dates/lib/css/_datepicker.css';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { DateRangePicker } from 'react-dates';
import messages from './messages';

import backgroundSrc from './images/background.jpg';
import {
  BackgroundImage,
  MainPanel,
  InnerContainer,
  Container,
} from './styles';

export default function HomePage() {
  const [focusInput, setFocusInput] = useState(null);
  const [startDateInput, setStartDateInput] = useState(null);
  const [endDateInput, setEndDateInput] = useState(null);
  return (
    <Container>
      <BackgroundImage src={backgroundSrc} />
      <InnerContainer>
        <MainPanel>
          <h2>
            <FormattedMessage {...messages.header} />
          </h2>
          <DateRangePicker
            startDate={startDateInput}
            startDateId="your_unique_start_date_id"
            endDate={endDateInput}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) => {
              setStartDateInput(startDate);
              setEndDateInput(endDate);
            }}
            focusedInput={focusInput}
            onFocusChange={setFocusInput}
          />
        </MainPanel>
      </InnerContainer>
    </Container>
  );
}
