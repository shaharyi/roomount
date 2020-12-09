import styled from 'styled-components';

export const DateRangePickerWrapper = styled.div`
margin-bottom:8px;
.DateRangePickerInput_1 {
border:none;

}
.DateRangePickerInput_arrow {
margin-right:15px;
}
.DateInput {
width: 85px;
}
.DateInput input {
font-size:14px;
padding: 0;
}
.DateRangePickerInput_calendarIcon{
margin:0;
outline: none;
padding:5px 10px 8px 10px;
}
`;

export const HotelAutoCompleteWrapper = styled.div`

.menu {
  z-index: 999;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #cccccc;
  background-color: #f9f9f9;
}

.item {
  width: 100%;
  border: 1px solid #cccccc;
  padding: 2px 6px;
  cursor: default;
}

.item-highlighted {
  color: white;
  background-color: #4095bf;
}

.item-header {
  background-color: #eeeeee;
  color: #454545;
	font-weight: bold;
}
`;