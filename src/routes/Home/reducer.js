import { addReducer } from '../../reduxUtils';

const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    default:
      return state;
  }
};

addReducer('auth', reducer);
