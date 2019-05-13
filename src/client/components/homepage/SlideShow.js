import StickyNotes from '../StickyNotes';
import SplitText from '../SplitText'; 
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import HowSlides from './HowSlides';
import { loopieblue, loopieyellow } from '../styles';

const pages = [
  ({ style }) => <animated.div className="slide-background-test order" style={{ ...style }}></animated.div>,
  ({ style }) => <animated.div className="slide-background-test pickup" style={{ ...style }}></animated.div>,
  ({ style }) => <animated.div className="slide-background-test washer" style={{ ...style }}></animated.div>,
  ({ style }) => <animated.div className="slide-background-test fold" style={{ ...style }}></animated.div>,
  ({ style }) => <animated.div className="slide-background-test deliver" style={{ ...style }}></animated.div>,
]

const pages2 = [
  
  ({ style }) => <animated.div className="slide-left test" style={{ ...style }}>Place an order with your phone</animated.div>,
  ({ style }) => <animated.div className="slide-left test" style={{ ...style }}>A driver will come to pick up your clothes</animated.div>,
  ({ style }) => <animated.div className="slide-left test" style={{ ...style }}>The driver takes your clothes to a certified washer</animated.div>,
  ({ style }) => <animated.div className="slide-left test" style={{ ...style }}>Your clothes are washed and folded</animated.div>,
  ({ style }) => <animated.div className="slide-left test" style={{ ...style }}>A driver delivers your washed, folded clothes to you in under 24 hours</animated.div>,
]

function SlideShow() {
	const [index, set] = useState(0);
	const onClick = useCallback(() => set(state => (state + 1) % 5), []);
	const transitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
	});
	const transitions2 = useTransition(index, p => p, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
  return (
  	<React.Fragment>
	    <div className="slide" onClick={onClick}>
	      {transitions.map(({ item, props, key }) => {
	        const Page = pages[item]
	        return (<Page key={key} style={props} />)
	      })}
	    </div>
	    <div className="slide-left" onClick={onClick}>
	      {transitions2.map(({ item, props, key }) => {
	        const PageLeft = pages2[item]
	        return (<PageLeft key={key} style={props} />)
	      })}
	    </div>
    </React.Fragment>
  )
}

export default SlideShow;
