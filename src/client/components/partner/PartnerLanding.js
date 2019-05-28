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
        Loopie's wash and fold laundry delivery service is perfect for mobile, 
        active Bungalow residents. Spend your time doing what you love, 
        and leave the laundry to us. Sign up now and use discount code 
        Bungalow to receive your first bag free!{' '}
        </div>
        <PartnerCode code="Bungalow" />
        <div className="partner description-mobile">
        Loopie's wash and fold laundry delivery service is perfect for mobile, 
        motivated Bungalow residents. Spend your time doing what you love, 
        and leave the laundry to us. Sign up now and use discount code 
        Bungalow to receive your first bag free!{' '}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default PartnerLanding;
