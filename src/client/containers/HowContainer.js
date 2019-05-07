import React from 'react';
import {withRouter} from 'react-router';
import HowItWorks from '../components/homepage/HowItWorks';

class HowContainer extends React.Component {
  state = {
    image: '',
  };

  render() {
    return <HowItWorks />;
  }
}

export default withRouter(HowItWorks);
