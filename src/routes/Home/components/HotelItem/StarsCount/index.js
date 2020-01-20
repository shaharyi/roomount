import React from 'react';
import PropTypes from 'prop-types';
// import { Wrapper, Img, InfoContainer } from './styles';

export const StarsCount = ({ maxStars, stars, starSize }) => {
  const starShape = 5;
  const edge = 360 / starShape;
  const radius = starSize / 2;
  let s = 'M';
  for (let i = 0; i < starShape; i += 1) {
    const currentAngle = i * edge;
    const x = radius + Math.sin(currentAngle * (Math.PI / 180)) * radius;
    const y = radius + -Math.cos(currentAngle * (Math.PI / 180)) * radius;
    s += `${x} ${y} `;
    const currentAngle2 = i * edge + edge / 2;
    const x2 = radius + Math.sin(currentAngle2 * (Math.PI / 180)) * (radius / 2);
    const y2 = radius + -Math.cos(currentAngle2 * (Math.PI / 180)) * (radius / 2);
    s += `${x2} ${y2} `;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={starSize * maxStars} height={starSize} style={{ height: starSize }}>
      {[0, 1, 2, 3, 4].map((rank) => (
        <svg key={rank} x={(rank) * starSize}>
          <path fill={stars > rank ? '#ffda00' : 'lightgrey'} d={s} />
        </svg>
      ))}
    </svg>
  );
};

StarsCount.propTypes = {
  stars: PropTypes.number.isRequired,
  starSize: PropTypes.number,
  maxStars: PropTypes.number,
};

StarsCount.defaultProps = {
  starSize: 20,
  maxStars: 5,
};
