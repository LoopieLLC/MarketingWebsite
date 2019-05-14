import React from 'react';
import SplitLogo from '../SplitLogo';
import bungalow from '../../../../public/images/bungalow.png';

const PartnerLanding = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container full full-height">
      <div className="partner-header">
        <span className="partner-text black">Better, </span>
        <span className="partner-text blue">Together.</span>
      </div>
      <SplitLogo partner={bungalow} partneralt="Bungalow" />
    </div>
  </React.Fragment>
);

export default PartnerLanding;
