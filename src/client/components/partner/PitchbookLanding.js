import React from 'react';
import SplitLogo from '../SplitLogo';
import pitchbook from '../../../../public/images/pitchbook.png';
import PartnerCode from '../PartnerCode';

const PitchbookLanding = () => (
  // TODO: make it look better, add real text, shadows? animations?
  <React.Fragment>
    <div className="container full full-height">
      <div className="partner">
        <h1 className="partner-text black">
          Better, <span className="blue">Together.</span>
        </h1>
        <SplitLogo partner={pitchbook} partneralt="Pitchbook" />
        <div className="partner description">
          <p>
            Loopie has been serving customers in the Seattle area for over a year, and since our 
            start we have grown and changed immensely. There are few who understand 
            startups like the folks at Pitchbook, and we hope you'll try our wash and fold 
            laundry delivery service and get as excited about it as we are. In addition to 
            receiving a free Loopie Duffel, you will get $10.00 off your first order if you 
            sign up now with code: Pitchbook.{' '}
          </p>
          <PartnerCode code="Pitchbook" />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default PitchbookLanding;
