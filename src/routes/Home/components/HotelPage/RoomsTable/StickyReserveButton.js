import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


export const StickyReserveButton = ({ stickAt, children }) => {
  const containerElement = useRef();
  const [stick, setStick] = useState(false);
  const [elHeight, setHeight] = useState(0);
  const listener = () => {
    const { top, height } = containerElement.current.getBoundingClientRect();
    setHeight(height);
    setStick(top < stickAt);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });
  return (
    <div ref={containerElement} style={{ height: elHeight }}>
      <div style={{ position: stick ? 'fixed' : 'initial', top: `${stickAt}px`, zIndex: 999 }}>
        {children}
      </div>
    </div>
  );
};


StickyReserveButton.propTypes = {
  stickAt: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
