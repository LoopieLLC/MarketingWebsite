import React, {useState, useCallback, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import Proptypes from 'prop-types';
import Slide from './Slide';
import TextSlide from './TextSlide';

const pageClassesRight = [
  "slide-background-test order",
  "slide-background-test pickup",
  "slide-background-test washer",
  "slide-background-test fold",
  "slide-background-test deliver"
];

const pageTextLeft = [
  "Place an order with your phone",
  "A driver will come to pick up your clothes",
  "The driver takes your clothes to a certified washer",
  "Your clothes are washed and folded",
  "A driver delivers your washed, folded clothes to you in under 24 hours"
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
      <animated.div className="slide" onClick={onClick}>
        {transitions.map(({item, props, key}) => {
          const pageClass = pageClassesRight[item];
          return <Slide slideClassName={pageClass} style={props} />;
        })}
      </div>
      <div className="slide-left" onClick={onClick}>
        {transitions2.map(({item, props, key}) => {
          const pageText = pageTextLeft[item];
          return <TextSlide slideText={pageText} slideClassName={"slide-left test"} style={props} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default SlideShow;
