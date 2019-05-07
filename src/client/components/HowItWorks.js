import React from 'react';
import StickyNotes from './StickyNotes';
import SplitText from './SplitText';

const HowItWorks = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container full">
      <div className="title one">
        <SplitText header="How it works" type="split-text left" />
        <SplitText subtext="haha yea boiiiiiiiiiiiii" type="split-text right" />
      </div>
    </div>
  </React.Fragment>
);

export default HowItWorks;
