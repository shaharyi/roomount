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
    hotel_info: null,
    offers: null,
  },
  autoCompleteResults: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ON_MAP': {
      return {
        ...state,
        viewedHotel: action.payload
      };
    }
    case 'SET_RESULTS': {
      return {
        ...state,
        isLoading: false,
        results: action.data,
        fullDetails: {
          loading: false,
          hotel_info: null,
          offers: null,
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
    case 'GET_HOTEL_INFO': {
      const { fullDetails } = state;
      fullDetails.loading = true;
      return {
        ...state,
        fullDetails,
      };
    }
    case 'SET_HOTEL_INFO': {
      const { fullDetails } = state;
      fullDetails.loading = false;
      fullDetails.hotel_info = action.data;
      return {
        ...state,
        fullDetails,
      };
    }
    case 'GET_HOTEL_OFFERS': {
      const { fullDetails } = state;
      fullDetails.loading = true;
      return {
        ...state,
        fullDetails,
      };
    }
    case 'SET_HOTEL_OFFERS': {
      const { fullDetails } = state;
      fullDetails.loading = false;
      fullDetails.offers = action.data;
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
