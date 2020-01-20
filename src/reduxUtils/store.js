import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getReducers } from './reducers';

export const getStore = () => createStore(getReducers(), applyMiddleware(thunk));
