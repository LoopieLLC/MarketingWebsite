import React from 'react';
import {withRouter} from 'react-router';
import PricingCTA from '../components/PricingCTA';

class PricingContainer extends React.Component {
  state = {
    image: '',
  };

  render() {
    return <PricingCTA />;
  }
}

export default withRouter(PricingContainer);
