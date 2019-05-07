import React from 'react';
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
        header="24 Hour Turnaround"
        content="Our service is lightning-fast. Place your order and we'll deliver it back washed 24 hours after pickup."
        type="sticky-basic left"
      />
      <StickyNotes
        to=""
        header="Flat Rates"
        content="Stop with the hassle of weighing your bag. Our prices are per-bag instead of per-weight."
        type="sticky-basic center"
      />
      <StickyNotes
        to=""
        header="No accounts, No BS"
        content="No more frustration trying to create another account. Just plug in your information and order."
        type="sticky-basic right"
      />
    </div>
  </React.Fragment>
);

export default HomePageIntro;
