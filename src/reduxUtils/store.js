import { createStore } from 'redux';
import { getReducers } from './reducers';

export const getStore = () => createStore(getReducers());
