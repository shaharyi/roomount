import { addReducer } from '../../reduxUtils';
import { HOTELS_MOCK, MOCK_HOTEL_INFO } from './mockHotels';

const initialState = {
  isLoading: false,
  viewedHotel: null,
  results: HOTELS_MOCK,
  searchDetails: null,
  fullDetails: {
    loading: false,
    nights: 3,
    hotel_info: MOCK_HOTEL_INFO,
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
      return {
        ...state,
        fullDetails: {
          ...state.fullDetails,
          loading: true,
        }
      };
    }
    case 'SET_HOTEL_INFO': {
      let newState = {
        ...state,
        fullDetails: {
          ...state.fullDetails,
          loading: false,
          hotel_info: action.data,
        }
      };
      //@todo remove this mockup
      for (var prop in MOCK_HOTEL_INFO)
        if (!(prop in newState.fullDetails.hotel_info))
          newState.fullDetails.hotel_info[prop] = MOCK_HOTEL_INFO[prop];
      return newState;
    }
    case 'GET_HOTEL_OFFERS': {
      return {
        ...state,
        fullDetails: {
          ...state.fullDetails,
          loading: true,
        }
      };
    }
    case 'SET_HOTEL_OFFERS': {
      return {
        ...state,
        fullDetails: {
          ...state.fullDetails,
          loading: false,
          offers: action.data,
        }
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
