import React from 'react';
import SplitText from '../SplitText';
import SlideShow from './SlideShow.js';

const HowItWorks = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container split small">
        <SplitText 
          header="So How Does it All Work?" 
          type="split-text left-half" />
        <SplitText
          subtext="Our certified washers and drivers make laundry a breeze."
          type="split-text right-half"
        />
    </div>
    <div className="container slides">
      <SlideShow />
    </div>
  </React.Fragment>
);

export default HowItWorks;
