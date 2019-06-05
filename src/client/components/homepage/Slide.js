import React, {useState, useCallback, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import Proptypes from 'prop-types';

const pageClasses = [
  "slide-background-test order",
  "slide-background-test pickup",
  "slide-background-test washer",
  "slide-background-test fold",
  "slide-background-test deliver"
];

const Slide = (index, style) => {
	return (
      <animated.div className="slide-background-test order" style={{...style}}>{index.toString()}</animated.div>
    )
}

Slide.propTypes = {
  index: Proptypes.number,
  style: Proptypes.any,
};

export default Slide;