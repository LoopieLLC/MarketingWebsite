import React, {useState, useCallback, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import Proptypes from 'prop-types';

const Slide = (slideClassName, style) => {
	return (
    <animated.div
      className={{slideClassName}}
      style={{...style}}
    />
    )
}

Slide.propTypes = {
  slideClassName: Proptypes.any,
  style: Proptypes.any,
};

export default Slide;