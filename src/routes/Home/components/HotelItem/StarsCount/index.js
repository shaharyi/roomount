import React from 'react';
import PropTypes from 'prop-types';
// import { Wrapper, Img, InfoContainer } from './styles';

const starWidth = 25;
export const StarsCount = ({ stars }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={starWidth * 5} height={starWidth} style={{ height: 25 }}>
    {[0, 1, 2, 3, 4].map((rank) => (
      <svg key={rank} x={(rank) * starWidth}>
        <path fill={stars > rank ? '#ffda00' : 'lightgrey'} d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    ))}
  </svg>
);

StarsCount.propTypes = {
  stars: PropTypes.number.isRequired,
};
