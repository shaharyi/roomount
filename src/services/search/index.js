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
