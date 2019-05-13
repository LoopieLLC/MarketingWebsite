import StickyNotes from '../StickyNotes';
import SplitText from '../SplitText';
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import LoopieButton from '../LoopieButton';
import PropTypes from 'prop-types';

const HowSlides = ({ header, content }) => {
	return ([
		({ style }) => (
			<animated.div style={{ ...style, background: 'lightpink' }}>
				A
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style, background: 'lightblue' }}>
				B
			</animated.div>
		),
		({ style }) => (
			<animated.div style={{ ...style, background: 'lightgreen' }}>
				C
			</animated.div>
		),
	])
};

/**<div className="sticky-basic">
      <h3>{header}</h3>
      <p>{content}</p>
      <div className="more">
        <LoopieButton variant="textWhite" text="Learn More" />
      </div>
    </div>**/
HowSlides.propTypes = {
	header: PropTypes.string,
	content: PropTypes.string,
};

export default HowSlides;
