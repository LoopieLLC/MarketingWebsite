import React from 'react';
import PropTypes from 'prop-types';
import StickyNotes from './StickyNotes';
import SplitText from './SplitText';

const HomePageIntro = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container full">
      <div className="title one">
        <SplitText header="Why Choose Loopie Laundry?" type="split-text left" />
        <SplitText subtext="Ya betta choose it" type="split-text right" />
      </div>
      <StickyNotes
        to=""
        header="24 hour turnaround on every order"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        type="sticky-basic left"
      />
      <StickyNotes
        to=""
        header="Sticky Note"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        type="sticky-basic center"
      />
      <StickyNotes
        to=""
        header="Sticky Note"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        type="sticky-basic right"
      />
    </div>
  </React.Fragment>
);

export default HomePageIntro;
