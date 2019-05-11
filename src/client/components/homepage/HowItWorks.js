import React from 'react';
import StickyNotes from '../StickyNotes';
import SplitText from '../SplitText';

const HowItWorks = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container half-full">
      <div className="title one">
        <SplitText header="How it works" type="split-text left" />
        <SplitText subtext="Our certified washers and drivers make laundry a breeze." type="split-text right" />
      </div>
    </div>
  </React.Fragment>
);

export default HowItWorks;