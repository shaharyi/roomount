import { addReducer } from '../../reduxUtils';
import { HOTELS_MOCK } from './mockHotels';

const initialState = {
  isLoading: false,
  viewedHotel: null,
  results: HOTELS_MOCK,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_HOTEL': {
      return { ...state, viewedHotel: action.payload };
    }
    case 'SET_RESULTS': {
      return {
        ...state,
        isLoading: false,
        results: action.results,
      };
    }
    case 'GET_RESULTS': {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

addReducer('search', reducer);
