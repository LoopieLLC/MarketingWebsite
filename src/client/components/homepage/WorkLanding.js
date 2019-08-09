import React from 'react';
import StickyNotes from '../StickyNotes';
import SplitText from '../SplitText';

const WorkLanding = () => (
  <React.Fragment>
    <div className="container  half-full">
      <div className="title one">
        <SplitText header="Have a washer at home?" type="split-text left" />
        <SplitText
          subtext="Sign up today to become a Loopie Washer"
          type="split-text right"
        />
      </div>
    </div>
    <div className="container cards">
      <div className="sticky-contain">
        <StickyNotes
          to=""
          header="Work from Home"
          content="Work and earn money all from the comfort of your own home."
          type="sticky-basic left"
        />
        <StickyNotes
          to=""
          header="Real Income"
          content="Our washers make $15 for every standard bag they wash."
          type="sticky-basic center"
        />
        <StickyNotes
          to=""
          header="We Provide Detergent"
          content="No need to worry about buying detergent or dryer sheets. Our Loopie Washer Kit comes with everything you'll need."
          type="sticky-basic right"
        />
      </div>
    </div>
  </React.Fragment>
);

export default WorkLanding;
