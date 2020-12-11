import './reducer';
import { HOTELS_MOCK, FULL_HOTEL } from './mockHotels';

export const searchHotels = (options, history) => async (dispatch) => {
  // const { startDate, endDate, searchString } = options;
  dispatch({ type: 'GET_RESULTS', searchDetails: options });
  await new Promise((resolve) => setTimeout(resolve, 500));
  dispatch({ type: 'SET_RESULTS', data: HOTELS_MOCK });
  history.push('/');
};

export const getFullHotelInfo = (hotelId) => async (dispatch) => {
  dispatch({ type: 'GET_HOTEL' });
  await new Promise((resolve) => setTimeout(resolve, 500));
  FULL_HOTEL.id = hotelId;
  FULL_HOTEL.name = `MOCK_${hotelId}`;
  dispatch({
    type: 'SET_HOTEL',
    data: FULL_HOTEL,
  });
};


export const getHotels = (searchQuery) => async (dispatch, getStore) => {
  const url = new URL(process.env.REACT_APP_API_URL + '/hotels');
  const token = getStore().auth.user.access_token;
  console.log(token);
  url.searchParams.append('q', searchQuery);
  const result = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());
  console.log("RESULT: " + result);
  dispatch({
    type: 'SET_SEARCH_HOTELS',
    data: result,
  });
};

export const quickSearch = (searchTerms, history) => async (dispatch, getStore) => {
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

  const result = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`,
    },
  }).then((r) => r.json());

  console.log("RESULT: " + result);
  history.push('/hotelInfo/' + query.hotel_id)

  dispatch({
    type: 'SET_RESULTS',
    data: result,
  });  
};
