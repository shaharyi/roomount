import { addReducer } from '../../reduxUtils';
import { HOTELS_MOCK } from './services';

const initialState = {
  isLoading: false,
  // results: [],
  results: HOTELS_MOCK,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
