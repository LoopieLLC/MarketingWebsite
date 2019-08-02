import React from 'react';
import Proptypes from 'prop-types';

import LoopieButton from './LoopieButton';

// use with container split full-height
// TODO: make css work with more stuff lol

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

Jumbotron.propTypes = {
  header: Proptypes.string,
  subtext: Proptypes.subtext,
};

export default Jumbotron;
