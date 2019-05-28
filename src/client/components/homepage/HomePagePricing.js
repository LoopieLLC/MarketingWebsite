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
        header="Wash and Dry(No Fold)"
        content="We wash your clothes, dry them, and send them back"
        type="sticky-price right"
      />
      <StickyNotes
        to=""
        header="Wash and Fold"
        content="We wash your clothes, dry them, and fold them before sending them back"
        type="sticky-price left"
      />
    </div>
  </React.Fragment>
);

export default HomePagePricing;
