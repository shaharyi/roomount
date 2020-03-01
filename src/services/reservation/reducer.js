import { addReducer } from '../../reduxUtils';

const initialState = {
  rooms: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROOM': {
      const { roomId, count } = action.payload;
      const { rooms } = state;
      rooms[roomId] = count;
      return { rooms };
    }
    case 'SET_HOTEL_ID': {
      console.log(action);
      const { hotelId } = action.payload;
      return { ...state, hotelId };
    }
    default:
      return state;
  }
};

addReducer('reservation', reducer);
