import React, {useState, useCallback, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import Proptypes from 'prop-types';

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
    <animated.div className="slide-left test" style={{...style}}>
      <h3 className="slide-text">Place an order with your phone</h3>
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-left test" style={{...style}}>
      <h3 className="slide-text">A driver will come to pick up your clothes</h3>
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-left test" style={{...style}}>
      <h3 className="slide-text">
        The driver takes your clothes to a certified washer
      </h3>
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-left test" style={{...style}}>
      <h3 className="slide-text">Your clothes are washed and folded</h3>
    </animated.div>
  ),
  ({style}) => (
    <animated.div className="slide-left test" style={{...style}}>
      <h3 className="slide-text">
        A driver delivers your washed, folded clothes to you in under 24 hours
      </h3>
    </animated.div>
  ),
];

function SlideShow() {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex((state) => (state + 1) % 5), []);
  // const slideTimer = set(state => (state + 1) % 5), []);
  // const slideTimer2 = setState(0);
  const transitions = useTransition(index, (p) => p, {
    from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(0,0,0)'},
  });
  const transitions2 = useTransition(index, (p) => p, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
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
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </div>
      <div className="slide-left" onClick={onClick}>
        {transitions2.map(({item, props, key}) => {
          const PageLeft = pages2[item];
          return <PageLeft key={key} style={props} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default SlideShow;
