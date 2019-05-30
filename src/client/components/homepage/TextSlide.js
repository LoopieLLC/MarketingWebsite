import React, {useState, useCallback, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import Proptypes from 'prop-types';

const TextSlide = (slideText, slideClassName, style) => {
  return (
    <animated.div className={{slideClassName}} style={{...style}}>
      <h3 className="slide-text">{{slideText}}</h3>
    </animated.div>
    )
}

TextSlide.propTypes = {
  slideText: Proptypes.text,
  slideClassName: Proptypes.any,
  style: Proptypes.any,
};

export default TextSlide;