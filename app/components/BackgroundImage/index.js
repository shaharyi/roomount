/**
 *
 * BackgroundImage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import backgroundSrc from './images/background.jpg';
import { StyledImage } from './styles';

function BackgroundImage() {
  return <StyledImage src={backgroundSrc} />;
}

BackgroundImage.propTypes = {};

export default memo(BackgroundImage);
