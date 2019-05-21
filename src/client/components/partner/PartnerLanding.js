import React from 'react';
import SplitLogo from '../SplitLogo';
import bungalow from '../../../../public/images/bungalow.png';

const PartnerLanding = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container full full-height">
      <div className="partner header">
        <h1 className="partner-text black">
          Better, <span className="blue">Together.</span>
        </h1>
        <SplitLogo partner={bungalow} partneralt="Bungalow" />
      </div>
      <div className="partner-description">
        Loopie and Bungalow; the perfect match. Loopie&apos;s wash and fold
        laundry delivery service is perfect for motivated, mobile Bungalow
        residents. Use code GO_BUNGALOW now to receive your first order free,
        and free bags for your duration of Loopie Laundry. All Loopie orders are
        delivered within 24 hours, so you can save time and focus on what really
        matters.{' '}
      </div>
    </div>
  </React.Fragment>
);

export default PartnerLanding;
