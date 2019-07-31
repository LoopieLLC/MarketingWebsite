import React, {useState, useCallback, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import Proptypes from 'prop-types';
import Slide from './Slide';
import TextSlide from './TextSlide';

const pages = [
  ({style}) => (
    <animated.div
      className="slide-background-test order"
      style={{...style}}
    />
  ),
  ({style}) => (
    <animated.div
      className="slide-background-test pickup"
      style={{...style}}
    />
  ),
  ({style}) => (
    <animated.div
      className="slide-background-test washer"
      style={{...style}}
    />
  ),
  ({style}) => (
    <animated.div className="slide-background-test fold" style={{...style}} />
  ),
  ({style}) => (
    <animated.div
      className="slide-background-test deliver"
      style={{...style}}
    />
  ),
];

const pages2 = [
  ({style}) => (
    <animated.div className="slide-text" style={{...style}}>
      Place an order with your phone, and schedule a pick up time.
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-text" style={{...style}}>
      A driver will come to pick up your clothes and deliver them to a Loopie certified washer.
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-text" style={{...style}}>
        The driver takes your clothes to a certified washer. 
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-text" style={{...style}}>
      Your clothes are washed, dried, and folded.
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-text" style={{...style}}>
        A driver delivers your washed, folded clothes to you in under 24 hours. 
    </animated.div>
  ),
];

function SlideShow() {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex((state) => (state + 1) % 5), []);
  const transitions = useTransition(index, (p) => p, {
    from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(0,0,0)'},
  });
  const transitions2 = useTransition(index, (p) => p, {
    from: {opacity: 0, transform: 'translate3d(0%,0,0)'},
    enter: {opacity: 1,transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(0,0,0)'},
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((state) => (state + 1) % 5);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <React.Fragment>
      <div className="slide" onClick={onClick}>
        {transitions.map(({item, props, key}) => {
          let ImagePage = pages[item];
          return <ImagePage key={key} index={item} style={props} />;
        })}
      </div>
      <div className="slide-left" onClick={onClick}>
        {transitions2.map(({item, props, key}) => {
          let TextPage = pages2[item];
          return <TextPage key={key} index={key} style={props} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default SlideShow;
