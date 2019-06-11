import React from 'react';
import StickyNotes from '../StickyNotes';
import SplitText from '../SplitText';

const HomePagePricing = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container half-full">
      <div className="title one">
        <SplitText header="Simple Pricing." type="split-text left" />
        <SplitText
          subtext="Our customer plan is simple and easy."
          type="split-text right"
        />
      </div>
    </div>
    <div className="container split-cards">
      <StickyNotes
        to=""
        header="Standard Wash and Fold"
        content="We wash your clothes, dry them, fold them and send them back in the Loopie Duffel (10”W x 24”L x 18”H) within 24 hours."
        type="sticky-price left"
      />
      <StickyNotes
        to=""
        header="Commercial Wash and Fold"
        content="We wash your clothes, dry them, fold them and send them back in a Loopie Commercial Size Bag (30” x 40”) within 24 hours."
        type="sticky-price right"
      />
    </div>
  </React.Fragment>
);

export default HomePagePricing;
