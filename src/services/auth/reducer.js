import { addReducer } from '../../reduxUtils';

const initialState = {
  user: null,
  gettingUser: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return { ...state, gettingUser: true };
    }
    case 'SET_USER': {
      return {
        ...state,
        user: action.user,
        gettingUser: false,
      };
    }
    case 'CLEAR_USER': {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

addReducer('auth', auth);
