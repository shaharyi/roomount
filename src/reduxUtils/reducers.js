import { combineReducers } from 'redux';


export const reducersObj = {
  intle: {
    locale: 'en',
  },
};

export const getReducers = () => combineReducers(reducersObj);
