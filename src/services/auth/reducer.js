import { addReducer } from '../../reduxUtils';

const user = localStorage.getItem('USER');
const initialState = {
  user: user ? JSON.parse(user) : null,
  gettingUser: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return { ...state, gettingUser: true };
    }
    case 'SET_USER': {
      localStorage.setItem('USER', JSON.stringify(action.user));
      console.log(action.user);
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
    case 'LOG_OUT': {
      localStorage.removeItem('USER');
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
