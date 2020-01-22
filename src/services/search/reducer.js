import { addReducer } from '../../reduxUtils';
import { HOTELS_MOCK } from './mockHotels';

const initialState = {
  isLoading: false,
  viewedHotel: null,
  results: HOTELS_MOCK,
  fullDetails: {
    loading: false,
    info: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ON_MAP': {
      return { ...state, viewedHotel: action.payload };
    }
    case 'SET_RESULTS': {
      return {
        ...state,
        isLoading: false,
        results: action.data,
        fullDetails: {
          loading: false,
          info: null,
        },
      };
    }
    case 'GET_RESULTS': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_HOTEL': {
      const { fullDetails } = state;
      fullDetails.loading = true;
      return {
        ...state,
        fullDetails,
      };
    }
    case 'SET_HOTEL': {
      const { fullDetails } = state;
      fullDetails.loading = false;
      console.log(action);
      fullDetails.info = action.data;
      return {
        ...state,
        fullDetails,
      };
    }
    default:
      return state;
  }
};

addReducer('search', reducer);
