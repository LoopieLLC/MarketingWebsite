import React from 'react';
import StickyNotes from './StickyNotes';
import Proptypes from 'prop-types';

// will be a generic split-component
const SplitComponent = (props) => {
  return (
    <div className="split-component">
      <div className="left">
        <StickyNotes header="yo" type="sticky" />
      </div>
      <div className="right">
        <h3>yo</h3>
      </div>
    </div>
  );
};

export default SplitComponent;
