import React from 'react';
import {withRouter} from 'react-router';
import PartnerCTA from '../components/partner/PartnerCTA';

class PartnerContainer extends React.Component {
  state = {
    image: '',
  };

  render() {
    return <PartnerCTA />;
  }
}

export default withRouter(PartnerContainer);
