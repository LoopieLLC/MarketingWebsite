import React, {useState, useCallback, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import Proptypes from 'prop-types';

var slideText = [
  'Place an order with your phone',
  'A driver will come to pick up your clothes',
  'The driver takes your clothes to a certified washer',
  'Your clothes are washed and folded',
  'A driver delivers your washed, folded clothes to you in under 24 hours'
];

const TextSlide = (index, style) => {
  return (
    <animated.div className="slide-left test" style={{...style}}>
      <h3 className="slide-text">{"test output "}test output</h3>
    </animated.div>
    )
}

TextSlide.propTypes = {
  index: Proptypes.number,
  style: Proptypes.any,
};

export default TextSlide;