import { addReducer } from '../../reduxUtils';
import { HOTELS_MOCK } from './mockHotels';

const initialState = {
  isLoading: false,
  viewedHotel: null,
  results: HOTELS_MOCK,
  searchDetails: null,
  fullDetails: {
    loading: false,
    nights: 3,
    info: null,
  },
  autoCompleteResults: [],
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
        searchDetails: action.searchDetails,
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
      fullDetails.info = action.data;
      return {
        ...state,
        fullDetails,
      };
    }
    case 'SET_SEARCH_HOTELS': {
      return {
        ...state,
        autoCompleteResults: action.data,
      };
    }
    default:
      return state;
  }
};

addReducer('search', reducer);
