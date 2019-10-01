/*
 *
 * AuthService actions
 *
 */

export const TYPES = {
  SIGN_IN: 'SIGN_IN',
  SET_USER_INFO: 'SET_USER_INFO',
};

export function signIn() {
  return {
    type: TYPES.SIGN_IN,
  };
}

export function setUserInfo() {
  return {
    type: TYPES.SIGN_IN,
  };
}
