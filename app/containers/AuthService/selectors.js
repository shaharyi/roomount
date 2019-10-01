import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authService state domain
 */

const selectAuthServiceDomain = state => state.authService || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthService
 */

const makeSelectAuthService = () =>
  createSelector(
    selectAuthServiceDomain,
    substate => substate,
  );

export default makeSelectAuthService;
export { selectAuthServiceDomain };
