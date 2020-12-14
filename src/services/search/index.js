import './reducer';
import { HOTELS_MOCK, FULL_HOTEL } from './mockHotels';

export const searchHotels = (options) => async (dispatch) => {
  // const { startDate, endDate, searchString } = options;
  dispatch({ type: 'GET_RESULTS', searchDetails: options });
  await new Promise((resolve) => setTimeout(resolve, 500));
  dispatch({ type: 'SET_RESULTS', data: HOTELS_MOCK });
};

export const getMockData = (hotelId) => async (dispatch) => {
  dispatch({ type: 'GET_HOTEL_INFO' });
  await new Promise((resolve) => setTimeout(resolve, 500));
  FULL_HOTEL.id = hotelId;
  FULL_HOTEL.name = `MOCK_${hotelId}`;
  dispatch({
    type: 'SET_HOTEL',
    data: FULL_HOTEL,
  });
};

export const getFullHotelData = (searchTerms, history) => async (dispatch, getStore) => {
  let hotelId = searchTerms.hotelId
  await getHotelInfo(hotelId) (dispatch, getStore);
  await quickSearch(hotelId) (dispatch, getStore);
  history.push('/hotelInfo/' + hotelId);  
};

export const getHotelInfo = (hotelId) => async (dispatch, getStore) => {
  const url = new URL(process.env.REACT_APP_API_URL + '/hotel_info/' + hotelId);
  const token = getStore().auth.user.access_token;
  console.log(token);
  dispatch({ type: 'GET_HOTEL_INFO' });
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  console.log("RESULT: " + data);
  dispatch({
    type: 'SET_HOTEL_INFO',
    data: data,
  });
  return data;
};

export const getHotels = (searchQuery) => async (dispatch, getStore) => {
  const url = new URL(process.env.REACT_APP_API_URL + '/hotels');
  const token = getStore().auth.user.access_token;
  console.log(token);
  url.searchParams.append('q', searchQuery);
  dispatch({
    type: 'GET_SEARCH_HOTELS',
  });  
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  let data = await response.json();
  console.log("RESULT: " + data);
  dispatch({
    type: 'SET_SEARCH_HOTELS',
    data: data,
  });
};

export const quickSearch = (searchTerms) => async (dispatch, getStore) => {
  const url = new URL(process.env.REACT_APP_API_URL + '/quicksearch');
  const token = getStore().auth.user.access_token;
  searchTerms = {
    searchString: 1,
    startDate: '2020-04-27',
    endDate: '2020-05-01',
  };
  
  const query = {
    hotel_id: searchTerms.searchString,
    check_in: searchTerms.startDate,
    check_out: searchTerms.endDate,
  };

  console.log("Query:");
  console.log(query);

  const body = JSON.stringify(query);

  dispatch({
    type: 'GET_HOTEL_OFFERS',
  });  

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`,
    },
  });
  
  let data = await response.json();

  console.log("RESULT: " + data);

  dispatch({
    type: 'SET_HOTEL_OFFERS',
    data: data,
  });  
};
