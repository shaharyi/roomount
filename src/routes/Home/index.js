/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import 'react-dates/lib/css/_datepicker.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import './RMHome.css'

import { MainPanel, InnerContainer, Container } from './styles';

//export function HomePage({ authService }) {

export const Home = ({ authService }) => {
  // console.log(authService);
  const [hotel, setHotel] = useState("");
  const [focusInput, setFocusInput] = useState(null);
  const [startDateInput, setStartDateInput] = useState(null);
  const [endDateInput, setEndDateInput] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    setHotel(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/quicksearch')
  }

  const doNavigate = (e) => {
    let key = e.target.getAttribute("id");
    switch (key) {
      case "RMHow": {
        window.location.href = "./how";
        return;
      }
      case "RMBenefit": {
        window.location.href = "./benefit";
        return;
      }
      default:
        {
          window.location.href = "./NoSuchPage";
          return;
        }
    }
  }


  return (
    <Container>
      <InnerContainer>
        <MainPanel >
          <div className="RMMainTable">
            <div className="RMActionRow">
              <div className="RMActionCell">
                <button id="RMHow" onClick={doNavigate} className="actionButton hwd">How we differ</button>
              </div>
              <div className="RMActionCell">
                <button id="RMBenefit" onClick={doNavigate} className="actionButton">Hotelier benefit</button>
              </div>
              <div className="RMActionCell">
                <button className="actionButton">Add your property</button>
              </div>
            </div>
          </div>
          <div className="RMMessage">
            <div className="RMActionCell">
              <textarea readOnly className="messageWidget">
              </textarea>
            </div>
          </div>
          <div className="RMSignIn">
            <div className="RMActionCell">
              <span>Please take 20 seconds to</span>
              <a className="RMSignLink" href="about:blank" >sign up</a>
              <label>, so that we can offer you our best price</label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="RMActionTable RMDateRows">
              <div className="RMActionRow">
                <div className="RMActionCell">Check a specific hotel</div>
                <div className="RMActionCell">Search by location</div>
              </div>
              <div className="RMActionsRow">
                <div className="RMActionCell RMDateRows">
                  <input type="text" value={hotel} onChange={handleChange} className="RMInputField"></input>
                </div>
                <div className="RMActionCell RMDateRows">
                  <input className="RMInputField"></input>
                </div>
              </div>
            </div>
            <div className="RMactionsBar">
              <div className="actionLeft">
                <label className="RMYourStay">Your Stay</label>
                <DateRangePicker
                  openDirection="up"
                  popperPlacement="top-start"
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
              </div>
            </div>
            <div className="actionsBar2">
              <div className="actionCenter">                
                <input type="submit" value="Get Price" className="actionButton" />
              </div>
            </div>
          </form>
        </MainPanel>
      </InnerContainer>
    </Container>
  );
};
