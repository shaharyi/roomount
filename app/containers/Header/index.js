/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector, createSelector } from 'reselect';
import { compose } from 'redux';

import messages from './messages';
import { Container, LinksContainer, LogoContainer, StyledLink } from './styles';

export function Header({ authService }) {
  // console.log(authService);
  return (
    <Container>
      <LogoContainer>
        <StyledLink to="/">
          <FormattedMessage {...messages.logo} />
        </StyledLink>
      </LogoContainer>

      <LinksContainer>
        <StyledLink to="/auth/register">
          <FormattedMessage {...messages.register} />
        </StyledLink>
        <StyledLink to="/auth/register">
          <FormattedMessage {...messages.signIn} />
        </StyledLink>
        <StyledLink to="/">
          <FormattedMessage {...messages.addProperty} />
        </StyledLink>
      </LinksContainer>
    </Container>
  );
}

Header.propTypes = {
  authService: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  authService: createSelector(
    state => state.authService || {},
    substate => substate,
  ),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Header);
