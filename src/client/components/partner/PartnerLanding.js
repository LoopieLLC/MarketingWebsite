import React from 'react';
import SplitLogo from '../SplitLogo';
import bungalow from '../../../../public/images/bungalow.png';

const PartnerLanding = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container full full-height">
      <div className="partner">
        <h1 className="partner-text black">
          Better, <span className="blue">Together.</span>
        </h1>
        <SplitLogo partner={bungalow} partneralt="Bungalow" />
        <div className="partner description">
        Loopie is proud to partner with Bungalow. Since we launched in Seattle 
        we&apos;ve noticed that many of our customers think about things
        differently and are willing to take bold lifestyle risks. We believe that
        anyone who uses Bungalow to find housing might be someone who values 
        their time, and would appreciate spending theirs doing what they love
        instead of laundry. First time Bungalow customers get their first bag on us!{' '}
        </div>
        <div className="code">
          <div className="title">
            <h3>Discount Code:</h3>
          </div>
          <div className="value">
            <h3>Bungalow</h3>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default PartnerLanding;
