import { addReducer } from '../reduxUtils';

const initialState = {
  locale: 'en',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCALE': {
      return { locale: action.locale };
    }
    default:
      return state;
  }
};

addReducer('intl', reducer);
