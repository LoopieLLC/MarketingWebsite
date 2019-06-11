import React from 'react';
import SplitLogo from '../SplitLogo';
import bungalow from '../../../../public/images/bungalow.png';
import PartnerCode from '../PartnerCode';

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
          <p>
            Loopie's wash and fold laundry delivery service is perfect for
            mobile, active Bungalow residents. Spend your time doing what you
            love, and leave the laundry to us. In addition to receiving a free Loopie Duffel 
            with your first order, you will get $30.00 off your first order 
            if you sign up now with code: Bungalow.{' '}
          </p>
          <PartnerCode code="Bungalow" />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default PartnerLanding;
