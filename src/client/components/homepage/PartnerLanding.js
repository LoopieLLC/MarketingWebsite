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
