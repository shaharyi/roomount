import './reducer';
import { HOTELS_MOCK } from './mockHotels';

export const searchHotels = (options) => async (dispatch) => {
  dispatch({ type: 'GET_RESULTS' });
  console.log('SerachingHotels', options);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  dispatch({ type: 'SET_RESULTS', results: HOTELS_MOCK });
};
