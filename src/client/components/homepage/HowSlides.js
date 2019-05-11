import StickyNotes from '../StickyNotes';
import SplitText from '../SplitText';
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';

function HowSlides() {
	const [index, set] = useState(0);
	const onClick = useCallback(() => set(state => (state + 1) % 3), []);
	const transitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
	});
	return <div className="container full" />;
}

export default HowSlides;
