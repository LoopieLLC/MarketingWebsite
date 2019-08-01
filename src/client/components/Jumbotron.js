import React from 'react';
import Proptypes from 'prop-types';

import LoopieButton from './LoopieButton';

// use with container split full-height

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <h1>{props.header}</h1>
      <h3>{props.subtext}</h3>
      <div className="btn">
        <LoopieButton variant="outlined">Learn More</LoopieButton>
      </div>
    </div>
  );
};

export default Jumbotron;
