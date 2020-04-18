import './reducer';
import { HOTELS_MOCK, FULL_HOTEL } from './mockHotels';

export const searchHotels = (options, history) => async (dispatch) => {
  const { startDate, endDate, searchString } = options;
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
  const url = new URL('https://roomount.com/api/v1.0/hotels');
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
  console.log(result);
  dispatch({
    type: 'SET_SEARCH_HOTELS',
    data: result,
  });
};

// const quickSearch = async (token) => {
//   const body = JSON.stringify({
//     hotel_name: 'Inntel Hotels Amsterdam Centre',
//     check_in: '2020-03-27',
//     check_out: '2020-04-01',
//   });
//   const result = await fetch('https://roomount.com/api/v1.0/quicksearch', {
//     method: 'POST',
//     mode: 'cors',
//     body,
//     cache: 'no-cache',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((r) => r.json());

//   return result;
// };
