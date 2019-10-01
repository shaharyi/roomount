/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import 'react-dates/lib/css/_datepicker.css';
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { DateRangePicker } from 'react-dates';
import { createStructuredSelector, createSelector } from 'reselect';
import { compose } from 'redux';
import messages from './messages';

import { MainPanel, InnerContainer, Container } from './styles';
import BackgroundImage from '../../components/BackgroundImage';

export function HomePage({ authService }) {
  // console.log(authService);
  const [focusInput, setFocusInput] = useState(null);
  const [startDateInput, setStartDateInput] = useState(null);
  const [endDateInput, setEndDateInput] = useState(null);

  return (
    <Container>
      <BackgroundImage />
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

HomePage.propTypes = {
  authService: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  authService: createSelector(
    state => state.authService || {},
    substate => substate,
  ),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(HomePage);
