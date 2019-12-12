import { reducersObj } from './reducers';

export const addReducer = (reducerName, reducer) => {
  reducersObj[reducerName] = reducer;
};
