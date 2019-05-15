import React from 'react';
import {withRouter} from 'react-router';
import PartnerLanding from '../components/partner/PartnerLanding';

class PartnerContainer extends React.Component {
  state = {
    image: '',
  };

  render() {
    return <PartnerLanding />;
  }
}

export default withRouter(PartnerContainer);
