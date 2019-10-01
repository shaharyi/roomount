/*
 *
 * AuthService reducer
 *
 */
import produce from 'immer';
import { TYPES } from './actions';
import { USER_INFO_KEY } from './constants';

const getSavedUserInfo = () =>
  localStorage.getItem(USER_INFO_KEY)
    ? JSON.parse(localStorage.getItem(USER_INFO_KEY))
    : {};

export const initialState = {
  userInfo: getSavedUserInfo(),
  signingIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const authServiceReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TYPES.SIGN_IN:
        draft.signingIn = true;
        break;
    }
  });

export default authServiceReducer;
