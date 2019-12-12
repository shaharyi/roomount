import { combineReducers } from 'redux';

const initialState = {
  user: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.user,
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


export const reducersObj = {
  auth,
};

export const getReducers = () => combineReducers(reducersObj);
