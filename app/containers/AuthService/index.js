/**
 *
 * AuthService
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthService from './selectors';
import reducer from './reducer';
import saga from './saga';

export function AuthService() {
  useInjectReducer({ key: 'authService', reducer });
  useInjectSaga({ key: 'authService', saga });
  return <div />;
}

const mapStateToProps = createStructuredSelector({
  authService: makeSelectAuthService(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(AuthService);
